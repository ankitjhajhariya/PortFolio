import React, { useState } from 'react';
import './ContactMe.scss';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.name && formData.email && formData.message) {
            console.log('Form Submitted:', formData);
            setSubmitted(true);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }
    };

    return (
        <div className="contact-cover">
            <div className="contact-section">
                <h2>Contact Me</h2>
                <p>I'd love to hear from you! Fill out the form below and I’ll get back to you shortly.</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows="6"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Send Message</button>
                    {submitted && <p className="success">Thanks for reaching out! </p>}
                </form>
            </div>
        </div>
    );
}

export default Contact;
