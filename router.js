// Basit sayfa yönlendirme koruması
document.addEventListener('DOMContentLoaded', () => {
  const roleRequired = document.body.dataset.role; // örn: <body data-role="student">
  if (roleRequired) {
    auth.guardPageAccess(roleRequired);
  }

  // Küresel buton bağlamaları
  const logoutBtn = document.getElementById('logout-btn');
  if (logoutBtn) logoutBtn.addEventListener('click', () => { auth.logout(); window.location.href='login.html'; });
});
