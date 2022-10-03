import './About.css';
import about1 from '../../images/about1.png';

const About = () => {
    return(
        <div id='about'>
            <div className='about-1'>
                 <div>
                    <img className='about-img' src={about1}></img>
                </div>
                <div className='about11'>
                    <p className='about-title'>About</p>
                    <p className='about-text'>Shocks or impacts, temperature variations, magnetic fields, wear and tear, humidity – Rolex watches must be able to resist even the harshest conditions over a long period without their integrity or performance being compromised or diminished.  For Hans Wilsdorf, the brand’s founder, it was essential that each Rolex watch give the exact time and that its movement be protected in the best way. More than a hundred years after the first models were created, this philosophy still underpins the development and production of every watch stamped with the emblematic crown.</p>
                    <button className='about-btn'>Read More</button>
                </div>
               
        </div>
        

        
        </div>
    );
}
export default About;