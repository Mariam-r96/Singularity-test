import React from 'react';
import '../style/header.css';
import {Link} from "react-router-dom";
  

const Header=()=>{
    return(
        <div className="header">
            <div className="top-header">
                <div className="logo">LOGO</div>
                <ul>
                    <li className="contact-details">
                        <span className="contact-icon">icon</span>
                        <div>
                        <span className="tel"><a href="tel:+88-02-9559146">+88-02-9559146</a></span>
                        <br/>
                        <span className="mail"><a href="mailto: info@bdfinance.com.bd">info@bdfinance.com.bd</a></span>
                        </div>
                    </li>
                    <li className="address-details">
                        <span className="contact-icon">icon</span>
                        <div>
                        <span className="office">Corporate Office</span>
                        <br/>
                        <span className="address">27 Motijheel</span>
                        </div>
                    </li>
                </ul>
            </div>

            <nav>
                <ul className="navbar">
                   
                    <li> <Link to="/">Home</Link></li>
                    <li> <Link to="/">Deposits</Link></li>
                    <li> <Link to="/">Loans</Link></li>
                    <li> <Link to="/">Investor Relation</Link></li>
                    <li> <Link to="/">About Us</Link></li>
                    <li> <Link to="/">Careers</Link></li>
                    <li> <Link to="/sohayota">Sohayota</Link></li>
    
                </ul>
            </nav>
        </div>
    );
}

export default Header;