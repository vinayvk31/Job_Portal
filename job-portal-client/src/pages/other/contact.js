import React from 'react'
import Footer from '../../components/footer/footer'
import './Contact.css'

const Contact = () => {
  return (
    <div>
   <div>
  <header>
    <h1>Contact Us</h1>
  </header>
  <main>
    <section className="contact-form">
      <h2>Send us a message</h2>
      <form action="#">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required defaultValue={""} />
        <button type="submit">Send</button>
      </form>
    </section>
    <section className="contact-info">
      <h2>Get in touch</h2>
      <p>Phone: (123) 000000000</p>
      <p>Email: info@example.com</p>
      <p>Address: Main St, Main town , USA</p>
    </section>
  </main>
</div>
<Footer/>
</div>
  )
}

export default Contact