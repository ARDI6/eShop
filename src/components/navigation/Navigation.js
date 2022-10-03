import './Navigation.css'

const Navbar = () => {
    return(
        <div className='navigation'>
            
                <h3 className='logo'>e<span className='span1'>Shop</span></h3>
                <ul className='nav-menu'>
                    <li className='nav-item link'><a href="#home" className='nav-link'>Home</a></li>
                    <li className='nav-item link'><a href="#products" className='nav-link'>Products</a></li>
                    <li className='nav-item link'><a href="#about" className='nav-link'>About</a></li>
                    <li className='nav-item link'><a href="#contact" className='nav-link'>Contact</a></li>
                    
                    
                </ul>
                <form className='search'>
                    <input placeholder='Search' className='search__input'></input>
                    <button className='search__btn'>
                      <i class="fa-sharp fa-solid fa-magnifying-glass"></i>
                    </button>


                    <i class="fa-solid fa-cart-shopping"></i>
                    <i class="fa-solid fa-user"></i>
                    
                </form>


        </div>
    );
}
export default Navbar;