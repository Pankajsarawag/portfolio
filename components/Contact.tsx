import React from "react";
import "./Contact.css";

export default function Contact() {
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
        </>
    );
}
