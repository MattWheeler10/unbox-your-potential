<template>
  <section id="contact" class="cta">
    <div class="container">
      <div class="cta-content">
        <h2>Ready to Unbox Your Potential?</h2>
        <p>Take the first step towards a stronger, healthier you. Schedule your free consultation today with no obligation.</p>
        <button class="btn btn-primary btn-large">Book Your Free Consultation</button>
        <p class="cta-footer">Or reach out directly at <a href="mailto:zac@yoursite.com">zac@yoursite.com</a> | <a href="tel:+1234567890">(123) 456-7890</a></p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cta {
  background: linear-gradient(135deg, #ff6b35 0%, #f5621b 100%);
  color: white;
  padding: 100px 0;
  text-align: center;
}

.cta-content h2 {
  color: white;
  font-size: 48px;
  margin-bottom: 20px;
}

.cta-content p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 18px;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.btn-large {
  padding: 18px 45px;
  font-size: 18px;
}

.cta-footer {
  font-size: 14px !important;
  margin-top: 30px !important;
}

.cta-footer a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  transition: opacity 0.3s ease;
}

.cta-footer a:hover {
  opacity: 0.8;
}

@media (max-width: 768px) {
  .cta {
    padding: 60px 0;
  }

  .cta-content h2 {
    font-size: 32px;
  }

  .cta-content p {
    font-size: 16px;
  }
}
</style>
