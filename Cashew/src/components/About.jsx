function About() {
  return (
    <div
      id="about"
      className="container py-5 px-4"
      style={{ scrollMarginTop: "100px" }} 
    >
      <div
        className="card border-0 shadow-sm p-4"
        style={{ backgroundColor: "#e1d3c6ff", borderRadius: "12px" }}
      >
        <h1 className="about text-center mb-4" >About Us</h1>

        <p className="text lead text-center">
          Welcome to <strong>Cashew World</strong> — your trusted source for premium, sustainably sourced cashew nuts.
        </p>

        <p className="text ">
          With a reputation built over more than 20 years, we proudly serve over{" "}
          <strong>200+ clients in 30+ countries</strong>, ensuring every kernel meets global quality standards.
          Our team of 500+ dedicated professionals works across the supply chain — from ethical sourcing in tropical farms to processing in modern facilities.
        </p>

        <h4 className="mt-4 text">📋 Our Certification</h4>
        <p className="text">
          We are <strong>ISO 22000:2018 certified</strong> for processing and supplying cashew kernels,
          guaranteeing food safety at every step.
        </p>

        <h4 className="mt-4 text">🎯 Mission & Vision</h4>
        <p className="text">
          <strong>Our Mission:</strong> Deliver high-quality, fresh products on time with competitive pricing and exceptional service, achieving 100% customer satisfaction.
          <br />
          <strong>Our Vision:</strong> To be a global leader in Indian cashews, building trusted partnerships and achieving sustainable excellence.
        </p>

        <h4 className="mt-4 text">🌍 Global Reach & Ethical Sourcing</h4>
        <p className="text">
          We manage the direct import of raw cashews from countries like Benin, Ghana, Ivory Coast, and Tanzania.
          Our operations include ethical procurement, rigorous quality checks, drying, logistics, and export documentation — ensuring our clients receive only the finest kernels.
        </p>

        <h4 className="mt-4 text">📦 Packaging Excellence</h4>
        <p className="text">
          Our cashews are packed in <strong>food-grade flexible pouches and tins with CO₂</strong>,
          using partial vacuum sealing for maximum freshness.
          We offer various packaging options — 10kg, 25lb, 50lb — customized to meet different client needs.
        </p>
      </div>
    </div>
  );
}

export default About;
