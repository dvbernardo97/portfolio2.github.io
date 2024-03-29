import React from "react";
import './contact.css'


export default function Contact() {
    return (
        <section className="contact section" id="contact">
            <h2 className="section_title">Get in touch</h2>
            <span className="section_subtitle">Contact Me</span>

            <div className="contact_container container grid">
                <div className="contact_content">
                    <h3 className="contact_title">How To Reach Me</h3>

                    <div className="contact_info">
                        <div className="contact_card">
                            <i className="bx bx contact_card-icon"></i>
                            <h3 className="contact_card-title">Email</h3>
                            <span className="contact_card-data">dominicvbern@gmail.com</span>
                            <p>818-644-9313</p>
                            <a href="mailto:dominicvbern@gmail.com" className="contact_button">Write me{" "}<i className="bx bx-right-arrow-alt contact_button-icon"></i></a>
                        </div>
                    </div>
                </div>
                <form className="contact_form">
                    <div className="contact_form-div">
                        <label className="contact_form-tag">Mail</label>
                        <input type="email" name="email" className="contact_form-input" placeholder="Insert your email" />
                    </div>
                    <div className="contact_form-div">
                        <label className="contact_form-tag">Name</label>
                        <input type="text" name="name" className="contact_form-input" placeholder="Insert your name" />
                    </div>
                    <div className="contact_form-div">
                        {/* <label className="contact_form-tag"></label> */}
                        <textarea name="project" cols="30" rows="10" className="contact_form-input" placeholder="Write Me"></textarea>
                    </div>
                    <button className="button button--flex">Send Message</button>
                </form>
            </div>
        </section>
    )
}