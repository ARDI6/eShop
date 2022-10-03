import { useState } from 'react';
import './Footer.css';

const Footer = () => {
    const [footerStatus, setFooterStatus] = useState('Subscribe');
    const onSubmit = (e) => {
       e.preventDefault()
       setFooterStatus('Subscribing...')
       const { name, lastname , email, product } = e.target.elements
       
     }
    return(
        <div className='footer'>
            <div className='footer-box'>
                <p className='footer-title'>ABOUT US</p>
                <p className='footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, set do eiusmod tempor incididunt ut</p>
                <div className='footer-icon'>
                     <i class="fa-sharp fa-solid fa-location-dot"></i>
                     <p className='footer11'>10,000 Prishtina</p>
                </div>
                <div className='footer-icon1'>
                     <i class="fa-solid fa-phone"></i>
                     <p className='footer11'>+383 xx-xxx-xxx</p>
                </div>
                <div className='footer-icon2'>
                     <i class="fa-solid fa-envelope"></i>
                     <p className='footer11'>username@gmail.com</p>
                </div>



            </div>
            <div className='footer-box'>
                <p className='footer-title'>CATEGORIES</p>
                <p className='footer-cat'>Watches</p>
                
            </div>
            <div className='footer-box'>
                <p className='footer-title'>QUICK LINKS</p>
                <p className='footer-cat'>Home</p>
                <p className='footer-cat'>Products</p>
                <p className='footer-cat'>About</p>
                <p className='footer-cat'>Contact</p>
            </div>
            <div className='footer-box'>
                <p className='footer-title'>NEWSLETTER</p>
                <form onSubmit={onSubmit}>
                <input className='footer-input' placeholder='Enter your e-mail'></input>
                <button className='footer-button'>{footerStatus}</button>
                </form>
                <div className='footer-icon11'>

                <i class="fa-brands footericon fa-facebook"></i>
                <i class="fa-brands footericon fa-instagram"></i>
                <i class="fa-brands footericon fa-linkedin"></i>
                <i class="fa-brands footericon fa-pinterest-p"></i>

                </div>
            </div>


        </div>
    );
}
export default Footer;