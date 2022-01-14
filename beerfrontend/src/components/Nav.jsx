import {Link} from 'react-router-dom';
const Nav = () => {
    return ( 

    <div>
    <h3> This is the Nav </h3>
    <Link to="/Home">
    <h4>Home</h4>
    <img src='https://www.pinclipart.com/picdir/middle/125-1251996_white-home-5-icon-png-logo-home-clipart.png' alt='home' width='100' length='100'/>
    </Link>
    <Link to="/Beer">
    <h4>Shop</h4>
    <img src='https://www.ikea.com/gb/en/images/products/frakta-carrier-bag-large-blue__0711231_pe728076_s5.jpg?f=s' alt='home' width='100' length='100'/>
    </Link>
    <Link to="/content">
    <h4>Content</h4>
    <img src='https://iftc-edu.com/wp-content/uploads/2019/07/content_2.jpg' alt='home' width='100' length='100'/>
    </Link>
    <Link to="/about">
    <h4>About</h4>
    <img src='https://www.impactplus.com/hs-fs/hubfs/blog-image-uploads/best-about-us-pages.jpg?length=1200&name=best-about-us-pages.jpg' alt='home' width='100' length='100'/>
    </Link>
    </div>
     );
}
 
export default Nav;