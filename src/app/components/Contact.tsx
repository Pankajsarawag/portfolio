"use client";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import "./Contact.css";

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Send } from "@mui/icons-material";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm('service_918kytr', 'template_6826hf9', form.current, '2_m1zOWJHzA7Vc-ls')
                .then(
                    (result) => {
                        console.log('SUCCESS!', result.text);
                    },
                    (error) => {
                        console.error('FAILED...', error.text);
                    }
                );

            form.current.reset();
        }
        else {
            console.error('Form reference is null');
        }
    };

    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28791.6082056562!2d75.3724189647793!3d28.122645964884757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3913390583f17b4d%3A0xb717cafeaaf8c602!2sJhunjhunu%2C%20Rajasthan%20333001!5e0!3m2!1sen!2sin!4v1716355000283!5m2!1sen!2sin"
                width="100%"
                className="map"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="name-email">
                    <div className="name">
                        <label>Name <span style={{ color: "red" }}>*</span></label>
                        <input type="text" name="Name"  required={true}  />
                    </div>
                    <div className="email">
                        <label>Email <span style={{ color: "red" }}>*</span></label>
                        <input type="email" name="Email"  required={true}  />
                    </div>
                </div>
                <label>Message</label>
                <textarea name="message" />
                <div className="button">
                <button value={"Send"}><SendIcon style={{marginRight:5}}/> Send</button>
                </div>
            </form>
        </>
    );
}
