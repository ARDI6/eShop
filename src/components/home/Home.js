import './Home.css';
import Rolex1 from '../../images/rolex.png'

const Home = () => {
    return(
        <div id='home'>
            <div>
                <p className='home-title'>Rolex Watches</p>
                <p className='home-text'>Rolex watches have proved themselves from the start in the most extreme conditions imaginable – from the depths of the deepest oceans to the summits of the highest mountains, in the air and on the race track.</p>
                <button className='home-button'>SHOP NOW</button>

            </div>
            <div className='homeimg'>
                <img className='home-img' src={Rolex1}></img>


            </div>

        </div>
    );

}

export default Home;