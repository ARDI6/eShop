import './Delivery.css';

const Delivery = () => {
    return(
        <div className='delivery'>
            <div className='delivery-box'>
            <i class="fa-solid delivery-icon fa-truck"></i>
            <p className='delivery-title'>Free Delivery</p>
            <p className='delivery-text'>Free Shiping on all order</p>


            </div>
            <div className='delivery-box'>
            <i class="fa-solid delivery-icon fa-rotate"></i>
            <p className='delivery-title'>Return Policy</p>
            <p className='delivery-text'>Free Shiping on all order</p>

            </div>
            <div className='delivery-box'>
            <i class="fa-solid delivery-icon fa-headphones"></i>
            <p className='delivery-title'>24/7 Support</p>
            <p className='delivery-text'>Free Shiping on all order</p>

            </div>
            <div className='delivery-box'>
            <i class="fa-solid delivery-icon fa-coins"></i>
            <p className='delivery-title'>Secure Payment</p>
            <p className='delivery-text'>Free Shiping on all order</p>

            </div>
        </div>
    );
}
export default Delivery;