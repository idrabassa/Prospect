import React from 'react'
import {RiErrorWarningFill} from 'react-icons/ri'
import { Link} from 'react-router-dom';
import {useGlobalContext} from './context'

function Error() {
    const{isDarkMode}=useGlobalContext()
    return (
        <div className={`not-found-page ${isDarkMode?'dark-mode':''}`}>
            <h1>OOPS!!</h1>
            <h1>ERROR 404</h1>
            <RiErrorWarningFill/>
            <h1>PAGE NOT FOUND</h1>
            <Link to='/' className={`btn ${isDarkMode?'dark-mode':''}`}>Click here to go Home Page</Link>
        </div>
    )
}

export default Error
