import React, {useState} from 'react';
import './Contact.css';

const Contact = props => {
    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [subject, setSubject] = useState(''),
        [message, setMessage] = useState('');

    return (
        <main className='contact-us'>
            <h1>Contact Us!</h1>
            <section className='contact-us-info'>
                <p>Looking to book with us? Or have any questions? Fill out the form and we'll get right back to you!</p>
                <div className='contact-us-image'/>
            </section>
            <form className='contact-us-form'>
                <label>Name *</label>
                <div>
                    <section className='name-input'>
                        <input />
                        <span className='name-span'>First Name</span>
                    </section>
                    <section className='name-input'>
                        <input />
                        <span className='name-span'>Last Name</span>
                    </section>
                </div>
                <label>Email *</label>
                <input />
                <label>Subject *</label>
                <input />
                <label>Message *</label>
                <textarea />
                <button>SUBMIT</button>
            </form>
        </main>
    )
}

export default Contact;