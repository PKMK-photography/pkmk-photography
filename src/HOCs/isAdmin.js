import React, {useState} from 'react';

const isAdmin = (BaseComponent) => {
    const adminControl = props => {
        let [admin, setAdmin] = useState(false);

        const adminObj = {
            admin,
            setAdmin
        }

        return <BaseComponent {...props} adminObj={adminObj}/>
    }
}

export default isAdmin;