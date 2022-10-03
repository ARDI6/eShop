import './WmWatches.css';
import rolex5 from '../../images/rolwm1.png'
import rolex6 from '../../images/rolwm2.png'
import rolex7 from '../../images/rolwm3.png'
import { useState } from 'react';

const WmWatches = () => {

const [showPara,setShowPara] = useState(false)



    return(
        <div>
           <h3 className='products-gender1'>Women's Watches</h3>
            <div className='products-part2'>
                <div className='product-box2'>
                <img className='rolex' src={rolex5} ></img>
                   <div className='rolex-box33'>
                       <p className='rolex-text'>DATEJUST 36</p>
                       <p className='rolex-price'>Price: <span className='prices'>$13900</span></p>
                   </div>
                </div>
                <div className='product-box2'>
                <img className='rolex' src={rolex6} ></img>
                   <div className='rolex-box3'>
                       <p className='rolex-text'>LADY-DATEJUST</p>
                       <p className='rolex-price'>Price: <span className='prices'>$12,995</span></p>
                   </div>
                </div>
                <div className='product-box2'>
                <img className='rolex' src={rolex7} ></img>
                   <div className='rolex-box6'>
                       <p className='rolex-text'>DATEJUST 36</p>
                       <p className='rolex-price'>Price: <span className='prices'>$7945</span></p>
                   </div>
                </div>  
            </div>
            
            <button className='product-button' onClick={()=> setShowPara(!showPara)}
          
          >View More</button>
          {showPara && <p className='watches-text3'>No more products...</p>}
        </div>
    );
}
export default WmWatches;