import CartImg from '../../assets/images/cart.png';
import LogoImg from '../../assets/images/logo.png';
import MenuImg from '../../assets/images/menu.png';
const Header = () => {
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <a href="/">
                        <img src={LogoImg} alt="logo" width="125px" />
                    </a>
                </div>
                <nav>
                    <ul id="MenuItems">
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        {/* <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li> */}
                        <li><a href="/account">Account</a></li>
                    </ul>
                </nav>
                <a href="/cart">
                    <img src={CartImg} alt="View cart" width="30px" height="30px" />
                </a>
                <img src={MenuImg} alt="Open menu" className="menu-icon" />
            </div>
        </div>
    );
}

export default Header;