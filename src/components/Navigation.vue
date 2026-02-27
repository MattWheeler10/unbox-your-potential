<template>
  <nav class="navbar">
    <div class="container">
      <div class="nav-wrapper">
        <div class="logo">
          <a href="#home">Unbox Your Potential</a>
        </div>
        <ul class="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact" class="btn btn-primary">Get Started</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #1a1a1a;
  color: white;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.nav-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: 700;
  color: #ff6b35;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 30px;
  align-items: center;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #ff6b35;
}

@media (max-width: 768px) {
  .nav-links {
    gap: 15px;
  }

  .logo a {
    font-size: 18px;
  }

  .nav-links a {
    font-size: 14px;
  }
}
</style>
