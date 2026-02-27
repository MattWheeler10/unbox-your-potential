<template>
  <section id="services" class="services">
    <div class="container">
      <h2>My Services</h2>
      <p class="section-subtitle">Customized training programs designed for your specific goals</p>
      
      <div class="services-grid">
        <div class="service-card">
          <div class="service-icon">🏋️</div>
          <h3>One-on-One Training</h3>
          <p>Personalized workout sessions tailored to your fitness level, goals, and preferences. Full attention and guidance every step of the way.</p>
        </div>
        
        <div class="service-card">
          <div class="service-icon">👥</div>
          <h3>Group Classes</h3>
          <p>High-energy group training sessions that keep you motivated while working toward your goals alongside others on their fitness journey.</p>
        </div>
        
        <div class="service-card">
          <div class="service-icon">🥗</div>
          <h3>Nutrition Coaching</h3>
          <p>Comprehensive nutrition guidance and meal planning to complement your training and accelerate your results.</p>
        </div>
        
        <div class="service-card">
          <div class="service-icon">📱</div>
          <h3>Online Training</h3>
          <p>Remote training programs that fit your schedule. Get professional coaching from anywhere, anytime.</p>
        </div>
        
        <div class="service-card">
          <div class="service-icon">📊</div>
          <h3>Assessment & Planning</h3>
          <p>Thorough fitness assessments and customized goal-setting sessions to create your roadmap to success.</p>
        </div>
        
        <div class="service-card">
          <div class="service-icon">🎯</div>
          <h3>Transformation Programs</h3>
          <p>Complete transformation packages combining training, nutrition, and accountability for maximum results.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.services {
  background-color: #f9f9f9;
}

.services h2 {
  text-align: center;
  margin-bottom: 10px;
}

.section-subtitle {
  text-align: center;
  color: #666;
  font-size: 18px;
  margin-bottom: 50px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 30px;
}

.service-card {
  background: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 50px;
  margin-bottom: 15px;
}

.service-card h3 {
  color: #1a1a1a;
  margin-bottom: 15px;
}

.service-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
  }
}
</style>
