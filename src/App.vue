<script setup>
import Navigation from './components/Navigation.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import CTA from './components/CTA.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navigation />
  <Hero />
  <Services />
  <About />
  <CTA />
  <Footer />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.btn {
  display: inline-block;
  padding: 12px 30px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  cursor: pointer;
  font-size: 16px;
}

.btn-primary {
  background-color: #ff6b35;
  color: white;
}

.btn-primary:hover {
  background-color: #e55a24;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: white;
  color: #ff6b35;
  border: 2px solid #ff6b35;
}

.btn-secondary:hover {
  background-color: #ff6b35;
  color: white;
}

section {
  padding: 80px 0;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  margin-bottom: 20px;
}

h2 {
  font-size: 42px;
  color: #1a1a1a;
}

h3 {
  font-size: 28px;
}

p {
  margin-bottom: 15px;
  line-height: 1.8;
}
</style>
