import React from 'react';
import './ContactForm.css';
import { assets } from '../assets/assets';
import emailjs from '@emailjs/browser';

function ContactForm() {

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_rvbknul', 'template_s8j0axa', e.target, 'k9Pt_WGKzhQd7nteq')
            .then(
                () => {
                    console.log('EMAIL SENT SUCCESSFULLY!');
                },
                (error) => {
                    console.log('EMAIL SENDING HAS FAILED...', error.text);
                },
            );

        alert("EMAIL HAS BEEN SENT")

    }


    return (
        <div className="contact-form-maincont" style={{ backgroundImage: `url(${assets.bg_hero})` }}>
            <div className="contact-form-bg-wrapper">
                <img src={assets.lunaris4} alt="Background" className="contact-form-bg-image" />
            </div>
            <div className="contact-form-container">
                <div className="contact-form-wrapper">
                    <form className='myform' onSubmit={sendEmail}>
                        <p>Contact me</p>
                        <input type="text" placeholder="Name" name='name' /><br />
                        <input type="email" placeholder="Email" name='email' /><br />
                        <textarea placeholder="Message" rows="4" name='message' ></textarea><br />
                        <input type="submit" value="Sign in" /><br />
                    </form>
                    <div className="contact-form-drops">
                        <div className="contact-form-drop contact-form-drop-1"></div>
                        <div className="contact-form-drop contact-form-drop-2"></div>
                        <div className="contact-form-drop contact-form-drop-3"></div>
                        <div className="contact-form-drop contact-form-drop-4"></div>
                        <div className="contact-form-drop contact-form-drop-5"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
