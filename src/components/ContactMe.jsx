import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [notification, setNotification] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send('service_uzejhdi', 'template_cqyorse', formData, 'vfL3wNNvBTeXPH8fA')
        .then((response) => {
                console.log('Email sent successfully!', response);
                setNotification('Your messsage has been sent successfully!');
                // Optionally, you can reset the form fields here
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                setNotification('Error sending message. Please try again.');
            });
    };

    return (
        <section className="section" id="contact">
            <div className="container text-center">
                <h6 className="section-title mb-5">Contact Me</h6>
                <form onSubmit={handleSubmit} className="contact-form col-md-10 col-lg-8 m-auto">
                    <div className="form-row">
                        <div className="form-group col-sm-6">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="form-group col-sm-6">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter Email" required />
                        </div>
                        <div className="form-group col-sm-12">
                            <textarea name="message" value={formData.message} onChange={handleChange} rows="6" className="form-control" placeholder="Write Something" required></textarea>
                        </div>
                        <div className="form-group col-sm-12 mt-3">
                            <input type="submit" value="Send Message" className="btn btn-outline-primary rounded" />
                        </div>
                    </div>
                </form>
                {notification && <p>{notification}</p>}
            </div>
        </section>
    );
}
