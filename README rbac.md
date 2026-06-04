# RBAC Basit Örnek (Vanilla JS + localStorage)

Kısa kullanım:

- Klasörü `rbac_example` içinde küçük bir örnek uygulama bulunur.
- `index.html` ile başlayın.
- Öğrenciler `firstName`, `lastName`, `password` ile kaydolur; oluşturulan `username` formunda gösterilir (örn: ali.kaya).
- Danışmanlar ayrı kayıt olur ve `role = advisor` olur.
- `login.html` üzerinden giriş yapın; role göre yönlendirme yapılır.
- `student-dashboard.html` sadece öğrenciler görebilir; test kaydedip `results.html`'de kendi sonuçlarını görürler.
- `advisor-dashboard.html` sadece danışman görebilir; tüm öğrencileri ve tüm sonuçları görür.

Verilen fonksiyonlar (global `auth` nesnesi):

- `createStudent(firstName,lastName,password)`
- `createAdvisor(firstName,lastName,password)`
- `login(username,password)`
- `logout()`
- `isStudent()`
- `isAdvisor()`
- `saveTestResult(studentId,testName,score)`
- `getStudentResults(studentId)`
- `getAllResultsForAdvisor()`
- `guardPageAccess(requiredRole)`
