import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

export const Join = () => {
    const form = useRef()

    const sendEmail = (e) =>{
        e.preventDefault();

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current,
        'YOUR_USER_ID')
        .then((result)=>{
            console.log(result.text);
        }, (error)=> {
            console.log(error.text);
        })
    };
  return (
    <div className="Join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email address' />
                <button className='btn btn-j'>Join Now</button>
            </form>
        </div>
    </div>
  )
}
