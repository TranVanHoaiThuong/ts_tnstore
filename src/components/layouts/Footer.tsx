import AppStoreIcon from '../../assets/images/app-store.png';
import PlayStoreIcon from '../../assets/images/play-store.png';
import LogoWhite from '../../assets/images/logo-white.png';
const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="footer-col-1">
                        <h3>Download Our App</h3>
                        <p>Download App for Android and ios mobile phone.</p>
                        <div className="app-logo">
                            <img src={AppStoreIcon} alt="Get from App Store"/>
                            <img src={PlayStoreIcon} alt="Get from Play Store"/>
                        </div>
                    </div>
                    <div className="footer-col-2">
                        <img src={LogoWhite} alt="Logo"/>
                        <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits of Sports Accessible to the Many.
                        </p>
                    </div>
                    <div className="footer-col-3">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li>Blog Post</li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-4">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="copyright">Copyright 2023 - TranVanHoaiThuong</p>
            </div>
        </div>
    )
}

export default Footer;