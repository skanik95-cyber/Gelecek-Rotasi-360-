// Basit kimlik ve yetkilendirme işlemleri (localStorage tabanlı)
// Öğrenci kayıt: firstName, lastName, password
// Danışman kayıt: firstName, lastName, password, role = 'advisor'

function generateId(prefix) { return prefix + '-' + Date.now() + '-' + Math.floor(Math.random()*9000+1000); }

function createStudent(firstName, lastName, password) {
  // Allow single-name usernames: lastName is optional.
  if (!firstName || !password) return { ok:false, message:'Kullanıcı adı ve şifre gerekli.' };
  const fn = String(firstName).trim().toLowerCase();
  const ln = lastName ? String(lastName).trim().toLowerCase() : '';
  // If last name provided, use 'first.last', otherwise use single username
  const username = ln ? `${fn}.${ln}` : fn;
  const students = storage.getStudents();
  if (students.find(s => s.username === username)) return { ok:false, message:'Aynı kullanıcı adı zaten var. Farklı bir ad deneyin.' };
  // Danışman ataması: ilk danışman varsa ona ata
  const advisors = storage.getAdvisors();
  let advisorId = advisors.length > 0 ? advisors[0].id : null;
  const id = generateId('s');
  students.push({ id, firstName: fn, lastName: ln, username, password, advisorId });
  storage.saveStudents(students);
  return { ok:true, message:'Kayıt başarılı.', id, username };
}

function createAdvisor(firstName, lastName, password) {
  if(!firstName || !lastName || !password) return { ok:false, message:'Tüm alanları doldurun.' };
  const username = `${firstName.trim().toLowerCase()}.${lastName.trim().toLowerCase()}`;
  const advisors = storage.getAdvisors();
  if (advisors.find(a => a.username === username)) return { ok:false, message:'Aynı danışman kullanıcı adı mevcut.' };
  const id = generateId('a');
  advisors.push({ id, firstName, lastName, username, password, role: 'advisor' });
  storage.saveAdvisors(advisors);
  return { ok:true, message:'Danışman kaydı başarılı.', id, username };
}

function login(username, password) {
  if(!username || !password) return { ok:false, message:'Kullanıcı adı ve şifre gerekli.' };

  // önce danışman arayalım
  const advisors = storage.getAdvisors();
  const foundAdvisor = advisors.find(a => a.username === username && a.password === password);
  if (foundAdvisor) {
    storage.setCurrentUser({ id: foundAdvisor.id, role: 'advisor', username: foundAdvisor.username });
    return { ok:true, role:'advisor', message:'Danışman olarak giriş yapıldı.' };
  }

  // sonra öğrenci
  const students = storage.getStudents();
  const foundStudent = students.find(s => s.username === username && s.password === password);
  if (foundStudent) {
    storage.setCurrentUser({ id: foundStudent.id, role: 'student', username: foundStudent.username });
    return { ok:true, role:'student', message:'Öğrenci olarak giriş yapıldı.' };
  }

  return { ok:false, message:'Giriş başarısız. Bilgileri kontrol edin.' };
}

function logout() {
  storage.clearCurrentUser();
}

function isStudent() {
  const u = storage.getCurrentUser();
  return u && u.role === 'student';
}

function isAdvisor() {
  const u = storage.getCurrentUser();
  return u && u.role === 'advisor';
}

function saveTestResult(studentId, testName, score) {
  if (!studentId || !testName) return { ok:false, message:'Eksik bilgi.' };
  const results = storage.getResults();
  const id = generateId('r');
  const entry = { id, studentId, testName, score: Number(score), date: new Date().toISOString() };
  results.push(entry);
  storage.saveResults(results);
  return { ok:true, entry };
}

function getStudentResults(studentId) {
  const results = storage.getResults();
  return results.filter(r => r.studentId === studentId);
}

function getAllResultsForAdvisor() {
  return storage.getResults();
}

function guardPageAccess(requiredRole) {
  const user = storage.getCurrentUser();
  if (!user) {
    // oturum yok -> login sayfasına gönder
    window.location.href = 'login.html';
    return false;
  }
  if (requiredRole === 'student' && user.role !== 'student') {
    window.location.href = (user.role === 'advisor') ? 'advisor-dashboard.html' : 'login.html';
    return false;
  }
  if (requiredRole === 'advisor' && user.role !== 'advisor') {
    window.location.href = (user.role === 'student') ? 'student-dashboard.html' : 'login.html';
    return false;
  }
  return true;
}

// expose
window.auth = {
  createStudent, createAdvisor, login, logout,
  isStudent, isAdvisor, saveTestResult,
  getStudentResults, getAllResultsForAdvisor, guardPageAccess
};
