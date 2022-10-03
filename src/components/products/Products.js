import './Products.css';
import rolex2 from '../../images/img01.png'
import rolex3 from '../../images/img02.png'
import rolex4 from '../../images/img03.png'
import rolex8 from '../../images/img04.png'
import rolex9 from '../../images/img05.png'
import rolex10 from '../../images/img06.png'



const Products = () => {
   


    return(
        <div id='products'>
            <h1 className='products-title'>Featured Products</h1>
            <h3 className='products-gender'>Men's Watches</h3>
            <div className='products-part'>
                
                <div className='product-box'>
                    <img  className='rolex' src={rolex2} ></img>
                   <div className='rolex-box'>
                       <p className='rolex-text'>Submariner Date</p>
                       <p className='rolex-price'>Price: <span className='prices'>$9,495</span></p>
                   </div>

                   
                </div>
                <div className='product-box'>
                <img className='rolex' src={rolex3} ></img>
                   <div className='rolex-box2'>
                       <p className='rolex-text'>AIR-KING</p>
                       <p className='rolex-price'>Price: <span className='prices'>$8,995</span></p>
                   </div>
                </div>
                <div className='product-box'>
                <img className='rolex' src={rolex4} ></img>
                   <div className='rolex-box3'>
                       <p className='rolex-text'>GMT-Master II</p>
                       <p className='rolex-price'>Price: <span className='prices'>$20,250</span></p>
                   </div>
                </div>
            </div>
            <div className='products-part2'>
                <div className='product-box'>
                <img className='rolex' src={rolex8} ></img>
                   <div className='rolex-box8'>
                       <p className='rolex-text'>Oyster Perpetual 34</p>
                       <p className='rolex-price'>Price: <span className='prices'>$15,800</span></p>
                   </div>
                </div>
                <div className='product-box'>
                <img className='rolex' src={rolex9} ></img>
                   <div className='rolex-box7'>
                       <p className='rolex-text'>CELLINI MOONPHASE</p>
                       <p className='rolex-price'>Price: <span className='prices'>$28,750</span></p>
                   </div>
                </div>
                <div className='product-box'>
                <img className='rolex' src={rolex10} ></img>
                   <div className='rolex-box66'>
                       <p className='rolex-text'>Yacht-Master II</p>
                       <p className='rolex-price'>Price: <span className='prices'>$25,600</span></p>
                   </div>
                </div>  
            </div>

        </div>
        
    );
}
export default Products