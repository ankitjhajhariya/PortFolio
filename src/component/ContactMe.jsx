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
        if (!formData.name || !formData.email || !formData.message) {
            e.preventDefault();
            alert('Please fill in all required fields.');
        } else {
            setSubmitted(true);
        }
    };

    return (
        <div className="contact-cover">
            <div className="contact-section">
                <h2>Contact Me</h2>
                <p>I’d love to hear from you! Fill out the form below and I’ll get back to you shortly.</p>

                <form
                    className="contact-form"
                    action="https://formsubmit.co/ankit.22cse263@rtu.ac.in"
                    method="POST"
                    onSubmit={handleSubmit}
                >
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

                    {/* Optional hidden inputs */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

                    <button type="submit">Send Message</button>
                    {submitted && <p className="success">Thanks for reaching out!</p>}
                </form>
            </div>
        </div>
    );
}

export default Contact;
