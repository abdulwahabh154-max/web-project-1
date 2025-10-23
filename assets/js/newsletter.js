document.addEventListener("DOMContentLoaded", function () {
  const newsletterForm = document.getElementById("newsletterForm");

  if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const email = this.querySelector('input[type="email"]').value;

      // Simulate form submission
      const submitBtn = this.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;

      submitBtn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> جاري الاشتراك...';
      submitBtn.disabled = true;

      setTimeout(() => {
        alert(`شكرًا لاشتراكك بـ ${email}! ستصلك نشرتنا القادمة.`);
        this.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1500);
    });
  }
});
