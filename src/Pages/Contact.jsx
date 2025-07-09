export const Contact = () => {
  return (
    <section id="contact">
      <div className="cover"><p>CONTACT</p></div>
      <div className="container">
        <div className="form">
          <h2>Get in Touch</h2>
          <form>
            <div>
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>

            <div>
              <label>Email</label>
              <input type="email" placeholder="you@example.com" />
            </div>

            <div>
              <label>Message</label>
              <textarea rows="5" placeholder="Your message..."></textarea>
            </div>

            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="info">
          <h2>Customer Care</h2>
          <p>Have questions about the build or want to know more? Reach out — we’d be happy to connect and share more details about the Volvo P1800 Restomod PL.</p>
        </div>
      </div>

    </section>

  )
}
