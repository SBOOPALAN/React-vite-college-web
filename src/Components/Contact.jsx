import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [result, setResult] = useState(null);

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Name is required";
        if (!formData.phone) tempErrors.phone = "Phone number is required";
        else if (!/^\d+$/.test(formData.phone)) tempErrors.phone = "Phone number is invalid";
        if (!formData.message) tempErrors.message = "Message is required";
        return tempErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const tempErrors = validate();
        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            setResult("Sending....");
            const formDataToSend = new FormData(event.target);

            formDataToSend.append("access_key", "7784f7d1-f08f-4fe3-8101-254d13f3fe72");

            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formDataToSend
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully");
                event.target.reset();
                setFormData({
                    name: '',
                    phone: '',
                    message: ''
                });
            } else {
                console.log("Error", data);
                setResult(data.message);
            }
        } else {
            setResult("Please fix the errors before submitting.");
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src="/React-vite-college-web/public/msg-icon.png" alt="" /></h3>
                <p>Feel free to reach through contact form or find our contact
                    information below. Your feedback, questions, and suggestions are
                    important to us as we strive to provide exceptional service to our
                    university community.</p>
                <ul>
                    <li> <img src="/React-vite-college-web/public/mail-icon.png" alt="" />Contact@AzarTech.dev</li>
                    <li> <img src="/React-vite-college-web/public/phone-icon.png" alt="" />+91 9566655083</li>
                    <li> <img src="/React-vite-college-web/public/location-icon.png" alt="" />77 Andavar Nagar Vip, Namakkal <br />Pn 637002, TamilNadu, India</li>
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input
                        type="text"
                        name='name'
                        placeholder='Enter your name'
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && <span className="error">{errors.name}</span>}

                    <label>Phone Number</label>
                    <input
                        type="tel"
                        name="phone"
                        placeholder='Enter your mobile number'
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}

                    <label>Write your messages here</label>
                    <textarea
                        name="message"
                        rows="6"
                        placeholder='Enter your message'
                        value={formData.message}
                        onChange={handleChange}
                        required></textarea>
                    {errors.message && <span className="error">{errors.message}</span>}

                    <button type='submit' className='btn dark-btn'>
                        Submit now <img src="/React-vite-college-web/public/white-arrow.png" alt="" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Contact;
