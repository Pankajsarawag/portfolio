"use client";
import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import "./Contact.css";

export default function Contact() {
    const form = useRef<HTMLFormElement | null>(null);

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                'service_yifzpu9', 
                'template_6826hf9', 
                form.current, 
                'uPOAZ3T5OIE3pmPgP'
            )
            .then(
                (result) => {
                    console.log('Email sent successfully:', result.text);
                })
            .catch(
                (error) => {
                    console.error('Email failed to send:', error);
                }
            );

            form.current.reset();
        } else {
            console.error('Form reference is null');
        }
    };

    return (
        <>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
                <div className="name-email">
                    <div className="name">
                        <label>
                            Name <span style={{ color: "red" }}>*</span>
                        </label>
                        <input type="text" name="Name" required />
                    </div>
                    <div className="email">
                        <label>
                            Email <span style={{ color: "red" }}>*</span>
                        </label>
                        <input type="email" name="Email" required />
                    </div>
                </div>
                <label>Message</label>
                <textarea name="message" required />
                <div className="button">
                    <button type="submit">
                        <SendIcon style={{ marginRight: 5 }} /> Send
                    </button>
                </div>
            </form>
        </>
    );
}
