import CartImg from '../../assets/images/icons/cart.png';
import LogoImg from '../../assets/images/logo/logo.png';
import MenuImg from '../../assets/images/icons/menu.png';
const Header = () => {
    const menuToggle = () => {
        let menuItem = document.getElementById("menuItem");
        if(menuItem === null) {
            return;
        }
        if(menuItem.style.maxHeight === "0px") {
            menuItem.style.maxHeight = "200px";
        } else {
            menuItem.style.maxHeight = "0px";
        }
    }
    return (
        <div className="container">
            <div className="navbar">
                <div className="logo">
                    <a href="/">
                        <img src={LogoImg} alt="logo" width="125px" />
                    </a>
                </div>
                <nav>
                    <ul id="menuItem" style={{maxHeight: '0px'}}>
                        <li><a href="/">Home</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/account">Account</a></li>
                    </ul>
                </nav>
                <a href="/cart">
                    <img src={CartImg} alt="View cart" width="30px" height="30px" />
                </a>
                <img src={MenuImg} alt="Open menu" className="menu-icon" onClick={menuToggle} />
            </div>
        </div>
    );
}

export default Header;