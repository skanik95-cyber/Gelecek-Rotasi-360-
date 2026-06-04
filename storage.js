// Basit localStorage yardımcıları
function loadArray(key) {
  const raw = localStorage.getItem(key);
  return raw ? JSON.parse(raw) : [];
}

function saveArray(key, arr) {
  localStorage.setItem(key, JSON.stringify(arr));
}

// Kısa alias fonksiyonlar
function getStudents() { return loadArray('students'); }
function saveStudents(arr) { saveArray('students', arr); }

function getAdvisors() { return loadArray('advisors'); }
function saveAdvisors(arr) { saveArray('advisors', arr); }

function getResults() { return loadArray('results'); }
function saveResults(arr) { saveArray('results', arr); }

// currentUser: { id, role, username }
function setCurrentUser(user) { localStorage.setItem('currentUser', JSON.stringify(user)); }
function getCurrentUser() { const s = localStorage.getItem('currentUser'); return s ? JSON.parse(s) : null; }
function clearCurrentUser() { localStorage.removeItem('currentUser'); }

// Export to global (sayfalardan doğrudan erişim için)
window.storage = {
  getStudents, saveStudents,
  getAdvisors, saveAdvisors,
  getResults, saveResults,
  setCurrentUser, getCurrentUser, clearCurrentUser
};
