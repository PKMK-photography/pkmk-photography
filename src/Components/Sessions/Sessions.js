import React, {useEffect} from 'react';
import './Sessions.css';

const Sessions = props => {
    useEffect(() => {
        document.title = 'Sessions - P K M K // photography'
        window.scrollTo(0,0)
    }, [])

    return (
        <main className='sessions'>
            <h1 className='session-heading'>Sessions</h1>
            <section className='session-info'>
                <section>
                    <h1>Standard Sessions</h1>
                    <p>Standard Sessions are the one-stop-shop for most of your picture needs. These sessions last anywhere from 30 minutes to an hour depending on your needs. Listed below are common types of our standard session but if you don't see exactly what you're looking for, do not fear! We are more than willing to accommodate you. <span>All standard sessions start at <span>$250</span> (get a second photographer on your shoot for an additional <span>$50</span>).</span></p>
                    <ul className='standard-session-list'>
                        <li>Family Pictures</li>
                        <li>Newborns</li>
                        <li>Maternity</li>
                        <li>Senior's/Graduation</li>
                        <li>Engagements/Bridals</li>
                    </ul>
                </section>
                <section>
                    <h1>Specialty Sessions</h1>
                    <p>Specialty Sessions are the bundles we offer for weddings and elopements. All specialty sessions include two photographers.</p>
                    <ul className='specialty-session-list'>
                        <li>Uinta Package.</li>
                        <p>Engagements OR Bridals and 3 hours of Wedding Day Coverage.</p>
                        <p>150-300 digital images. $1200.</p>
                        <li>Escalante Package.</li>
                        <p>Engagements AND Bridals and up to 5 hours of Wedding Day Coverage.</p>
                        <p>350-500 digital images. $1800.</p>
                        <li>Zion Package.</li>
                        <p>Engagements AND Bridals and up to 8 hours of Wedding Day Coverage.</p>
                        <p>500-600 digital images. $2500.</p>
                        <li>Wedding Day Coverage (Hourly)</li>
                        <p>Minimum of 2 hours required.</p>
                        <p>$300 per hour.</p>
                    </ul>
                </section>
            </section>
        </main>
    )
}

export default Sessions;