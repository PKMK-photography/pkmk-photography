import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = props => {
    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [subject, setSubject] = useState(''),
        [message, setMessage] = useState(''),
        [messageSent, setMessageSent] = useState(false);

    useEffect(() => {
        document.title = 'Contact - P K M K // photography'
        window.scrollTo(0,0)
    }, [])

    const sendMessage = (e) => {
        e.preventDefault();

        console.log(firstName)
        console.log(lastName)

        axios.post('/api/email', {firstName, lastName, email, subject, message})
            .then(() => {
                setMessageSent(true);
                setSubject('');
                setMessage('');
            })
            .catch(err => console.log(err))
    }

    return (
        <main className='contact-us'>
            <h1>Contact Us!</h1>
            <section className='contact-us-info'>
                <p>Looking to book with us? Or have any questions? Fill out the form and we'll get right back to you!</p>
                <div className='contact-us-image'/>
            </section>
            {!messageSent
                ? (
                    <form className='contact-us-form'>
                        <label>Name *</label>
                        <div>
                            <section className='name-input'>
                                <input value={firstName} autoComplete='given-name' onChange={e => setFirstName(e.target.value)}/>
                                <span className='name-span'>First Name</span>
                            </section>
                            <section className='name-input'>
                                <input value={lastName} autoComplete='family-name' onChange={e => setLastName(e.target.value)}/>
                                <span className='name-span'>Last Name</span>
                            </section>
                        </div>
                        <label>Email *</label>
                        <input value={email} onChange={e => setEmail(e.target.value)}/>
                        <label>Subject *</label>
                        <input value={subject} onChange={e => setSubject(e.target.value)}/>
                        <label>Message *</label>
                        <textarea value={message} onChange={e => setMessage(e.target.value)}/>
                        <button onClick={sendMessage}>SUBMIT</button>
                    </form>
                )
                : (
                    <section className='message-sent-section'>
                        <h2>Your message has been sent!</h2>
                        <h3>We will get back to you as soon as possible.</h3>
                        <button onClick={() => setMessageSent(false)}>New Message</button>
                    </section>
                )}
        </main>
    )
}

export default Contact;