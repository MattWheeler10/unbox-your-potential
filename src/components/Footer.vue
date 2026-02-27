<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>Unbox Your Potential</h4>
          <p>Professional personal training to help you achieve your fitness goals and transform your life.</p>
          <div class="social-links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Twitter">𝕏</a>
          </div>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="#services">One-on-One Training</a></li>
            <li><a href="#services">Group Classes</a></li>
            <li><a href="#services">Online Training</a></li>
            <li><a href="#services">Nutrition Coaching</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact</h4>
          <p>Email: <a href="mailto:zac@yoursite.com">zac@yoursite.com</a></p>
          <p>Phone: <a href="tel:+1234567890">(123) 456-7890</a></p>
          <p>Location: [Your City, State]</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2026 Unbox Your Potential. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #1a1a1a;
  color: #ddd;
  padding: 60px 0 0;
  margin-top: 40px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h4 {
  color: white;
  margin-bottom: 20px;
  font-size: 18px;
}

.footer-section p {
  font-size: 14px;
  line-height: 1.6;
  color: #bbb;
}

.footer-section ul {
  list-style: none;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #bbb;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #ff6b35;
}

.social-links {
  display: flex;
  gap: 20px;
  margin-top: 15px;
}

.social-links a {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #ff6b35;
  color: white;
  border-radius: 50%;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: #f5621b;
  transform: translateY(-3px);
}

.footer-bottom {
  background-color: #111;
  padding: 20px 0;
  text-align: center;
  border-top: 1px solid #333;
}

.footer-bottom p {
  font-size: 13px;
  color: #999;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    gap: 30px;
  }
}
</style>
