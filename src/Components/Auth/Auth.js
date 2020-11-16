import React, {useState} from 'react';

const Auth = props => {
    let [email, setEmail] = useState(''),
        [password, setPassword] = useState('');

    return (
        <main>
            <form>
                <input value={email} onChange={e => setEmail(e.target.value)}/>
                <input value={password} onChange={e => setPassword(e.target.value)}/>
                <button>Log in</button>
            </form>
        </main>
    )
}

export default Auth;