import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {initGA, pageView} from '../../index';
import './Contact.css';

const Contact = props => {
    let [firstName, setFirstName] = useState(''),
        [lastName, setLastName] = useState(''),
        [email, setEmail] = useState(''),
        [subject, setSubject] = useState(''),
        [message, setMessage] = useState(''),
        [messageSent, setMessageSent] = useState(false);

    useEffect(() => {
        document.title = 'Contact - P K M K // photography';
        window.scrollTo(0,0);
        initGA('UA-186933835-1');
        pageView();
    }, [])

    const sendMessage = () => {
        axios.post('https://frozen-forest-18172.herokuapp.com/api/email', {firstName, lastName, email, subject, message})
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
                <p>Looking to book with us? Or have any questions? Fill out the form below and we'll get right back to you!</p>
                <div className='contact-us-image'/>
            </section>
            {!messageSent
                ? (
                    <form 
                        className='contact-us-form'
                        name='contact'
                        method='POST'
                        data-netlify='true'
                        data-netlify-honeypot='bot-field'>
                        <label>Name *</label>
                        <div>
                            <section className='name-input'>
                                <input name='first-name' label='first-name' value={firstName} autoComplete='given-name' required onChange={e => setFirstName(e.target.value)}/>
                                <span className='name-span'>First Name</span>
                            </section>
                            <section className='name-input'>
                                <input name='last-name' label='last-name' value={lastName} autoComplete='family-name' required onChange={e => setLastName(e.target.value)}/>
                                <span className='name-span'>Last Name</span>
                            </section>
                        </div>
                        <label>Email *</label>
                        <input name='email' label='email' value={email} required onChange={e => setEmail(e.target.value)}/>
                        <label>Subject *</label>
                        <input name='subject' label='subject' value={subject} required onChange={e => setSubject(e.target.value)}/>
                        <label>Message *</label>
                        <textarea name='message' label='message' value={message} required autoComplete='off' onChange={e => setMessage(e.target.value)}/>
                        <button type='submit' className='main-button' onClick={sendMessage}>SUBMIT</button>
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