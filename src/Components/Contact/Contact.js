import React, {useState, useEffect} from 'react';
import './Contact.css';

const Contact = props => {
    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [subject, setSubject] = useState(''),
        [message, setMessage] = useState('');

    useEffect(() => {
        document.title = 'Contact - P K M K // photography'
    }, [])

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
                        <input value={firstName} onChange={e => setFirstName(e.target.value)}/>
                        <span className='name-span'>First Name</span>
                    </section>
                    <section className='name-input'>
                        <input value={lastName} onChange={e => setLastName(e.target.value)}/>
                        <span className='name-span'>Last Name</span>
                    </section>
                </div>
                <label>Email *</label>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <label>Subject *</label>
                <input value={subject} onChange={e => setSubject(e.target.value)}/>
                <label>Message *</label>
                <textarea value={message} onChange={e => setMessage(e.target.value)}/>
                <button>SUBMIT</button>
            </form>
        </main>
    )
}

export default Contact;