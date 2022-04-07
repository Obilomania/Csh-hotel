import React from 'react'
import { Button } from 'react-bootstrap'

const Content = () => {
    return (
        <>
            <div className="header__content">
                <div className="landing__writings">
                    <div className="span__lines">
                        <span></span>
                        <span></span>
                    </div>
                    <div className="writeup">
                        <h1>Welcome to SCH Hotel</h1>
                        <h3>Home Away From Home</h3>
                    </div>
                    <div className="span__lines">
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <button>Contact Us</button>
            </div>
        </>
    )
}

export default Content