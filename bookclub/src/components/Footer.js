import React, {Component} from 'react';
import './../footer.css';
class Footer extends Component{
    render(){
        return( 
            <div className="outer-footer-container">
                <footer className="footer-container">
                    <div className="row row-one">
                        <div class="col-lg-3">
                            <div href="#" className="footer-logo link">CLASSY BOOK READING CLUB</div> 
                        </div>   
                        <div className="footer-link col-md-6">
                            <div href="#" className="link link-md-one ">BOOKS</div>
                            <div href="#" className="link link-md-two ">WHAT DO?</div>
                            <div href="#" className="link link-md-three ">WHO DO?</div>
                        </div>   
                       
                        <div class="col-lg-3 social-media-link">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-twitter"></i>  
                            <i className="fab fa-instagram"></i>  
                            <i className="fab fa-reddit-alien"></i>
                        </div>    
                    </div>
                    <div className="row copyright-footer">
                        <p className="copyright">&copy; 2020 Copyright Classy Book Reading Club. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;