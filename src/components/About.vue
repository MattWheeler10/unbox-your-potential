<template>
  <section id="about" class="about">
    <div class="container">
      <div class="about-wrapper">
        <div class="about-image">
          <div class="image-placeholder">👨‍🏫</div>
        </div>
        <div class="about-content">
          <h2>About Your Trainer</h2>
          <p>Hi! I'm Zac, a certified personal trainer passionate about helping people achieve their fitness goals and transform their lives. With over [X] years of experience in the fitness industry, I've worked with clients of all levels—from complete beginners to advanced athletes.</p>
          
          <p>My philosophy is simple: fitness should be challenging, rewarding, and sustainable. I believe in creating personalized programs that fit your lifestyle, not the other way around.</p>
          
          <div class="credentials">
            <div class="cred-item">
              <span class="cred-number">500+</span>
              <span class="cred-label">Clients Trained</span>
            </div>
            <div class="cred-item">
              <span class="cred-number">10+</span>
              <span class="cred-label">Years Experience</span>
            </div>
            <div class="cred-item">
              <span class="cred-number">95%</span>
              <span class="cred-label">Success Rate</span>
            </div>
          </div>

          <button class="btn btn-primary">Schedule a Free Consultation</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 80px 0;
  background-color: white;
}

.about-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-image {
  display: flex;
  justify-content: center;
}

.image-placeholder {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, #ff6b35 0%, #f5621b 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 150px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.about-content h2 {
  color: #1a1a1a;
  margin-bottom: 20px;
}

.about-content p {
  color: #666;
  font-size: 16px;
  margin-bottom: 25px;
  line-height: 1.8;
}

.credentials {
  display: flex;
  gap: 40px;
  margin: 40px 0;
  padding: 30px 0;
  border-top: 2px solid #eee;
  border-bottom: 2px solid #eee;
}

.cred-item {
  text-align: center;
  flex: 1;
}

.cred-number {
  display: block;
  font-size: 36px;
  font-weight: 700;
  color: #ff6b35;
  margin-bottom: 10px;
}

.cred-label {
  display: block;
  color: #666;
  font-size: 14px;
  font-weight: 500;
}

@media (max-width: 768px) {
  .about-wrapper {
    grid-template-columns: 1fr;
  }

  .image-placeholder {
    width: 250px;
    height: 250px;
    font-size: 100px;
  }

  .credentials {
    flex-direction: column;
    gap: 20px;
  }
}
</style>
