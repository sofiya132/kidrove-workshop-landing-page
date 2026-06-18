import '../styles/Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <span className="hero-badge">🤖 Summer Workshop 2026</span>
        <h1>AI & Robotics<br />Summer Workshop</h1>
        <p>
          Give your child a head start in the future! Join our hands-on,
          project-based workshop designed to introduce kids to Artificial
          Intelligence and Robotics in a fun, engaging way.
        </p>
        <div className="hero-tags">
          <span>📅 Starts 15 July 2026</span>
          <span>👧 Age 8–14 Years</span>
          <span>💻 Online</span>
          <span>⏱ 4 Weeks</span>
        </div>
        <a href="#register">
          <button className="hero-btn">Enroll Now →</button>
        </a>
      </div>
      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600"
          alt="AI Robotics Workshop"
        />
      </div>
    </section>
  )
}

export default Hero