import React from 'react'
import './Contact.css'
import location from './location.svg'
import whatsapp from './whatsapp.svg'
import mail from './mail.svg'
import Footer from '../Footer/Footer'
function Contact() {
    return (
        <div className='contact-section  '>
            <div className='container contact-container contact'>
                <div className=' contact-left'>
                    <h1>Let's chat.</h1>
                    <h1> Tell me about your Product.</h1>
                    <h5>Let's create something together 🤟</h5>
                    <div className='mail mt-4'>
                        <div className='mail-icon'>
                            <img src={mail} alt="" />
                        </div>
                        <h3 className='content-mail'>Mail me at
                            <span>pobarul.islam10@gmail.com</span></h3>
                    </div>
                    <div className='mail'>
                        <div className='mail-icon'>
                            <img src={location} alt="" />
                        </div>
                        <h3 className='content-mail'>Meet me at
                            <span>Thakurgaon sadar, Rangpur, Bangladesh</span></h3>
                    </div>

                    <div className='mail'>
                        <div className='mail-icon'>
                            <img src={whatsapp} alt="" />
                        </div>
                        <h3 className='content-mail'>WhatsApp
                            <span>+8801721620738</span></h3>
                    </div>
                </div>

                {/* left side end here  */}

                <div className='contact-form'>
                    <h2>Send us a message</h2>
                    <input className='mt-5' type="text" placeholder='Full name *' />
                    <input className='mt-2' type="email" placeholder='Email adress *' />
                    <h5 >Tell us more about your project*</h5>
                    <textarea name="" id="" cols="50" rows="20" placeholder='Message *'></textarea>
                    <input className='mt-3' type="file" />
                    <button className='btn mt-2 btn-lg'>Send Message</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}

export default Contact