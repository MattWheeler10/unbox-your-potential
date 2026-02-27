<template>
  <section id="home" class="hero">
    <div class="container">
      <div class="hero-content">
        <h1>Transform Your Body, Transform Your Life</h1>
        <p class="lead">Expert personal training tailored to your goals. Whether you're just starting out or pushing for peak performance, I'm here to help you unbox your potential.</p>
        <div class="hero-buttons">
          <button class="btn btn-primary">Book Your Free Consultation</button>
          <button class="btn btn-secondary">Learn More</button>
        </div>
      </div>
      <div class="hero-image">
        <div class="image-placeholder">💪</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  color: white;
  padding: 120px 0;
  display: flex;
  align-items: center;
}

.hero .container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  align-items: center;
}

.hero-content h1 {
  font-size: 56px;
  margin-bottom: 20px;
  color: white;
  line-height: 1.2;
}

.lead {
  font-size: 18px;
  margin-bottom: 30px;
  color: #ddd;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.hero-buttons .btn {
  padding: 15px 35px;
  font-size: 16px;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-placeholder {
  width: 300px;
  height: 300px;
  background: linear-gradient(135deg, #ff6b35 0%, #f5621b 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150px;
  box-shadow: 0 10px 30px rgba(255, 107, 53, 0.3);
}

@media (max-width: 768px) {
  .hero {
    padding: 60px 0;
  }

  .hero .container {
    grid-template-columns: 1fr;
  }

  .hero-content h1 {
    font-size: 36px;
  }

  .lead {
    font-size: 16px;
  }

  .image-placeholder {
    width: 200px;
    height: 200px;
    font-size: 100px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons .btn {
    width: 100%;
    text-align: center;
  }
}
</style>
