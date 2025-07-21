import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact container py-5 px-4 text-center">
      <h2>Contact Us</h2>
      <p className="lead mt-3">
        We'd love to hear from you! Reach out for business inquiries, partnerships, or just to say hello.
      </p>

      <div className="contact-details mt-4">
        <p><strong>Email:</strong>  ramkii@pratipacashews.com </p>
        <p><strong>Phone:</strong>  +91 9443240866</p>
        <p><strong>Address:</strong> Pratipa Cashews, 80 A/40 Lakshmipathy Nagar, Panruti - 607106, Tamilnadu, India</p>
      </div>

      <form className="contact-form mt-4">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
