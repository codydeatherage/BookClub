import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import image from './../assets/owl.jpg';
const PageWrapper = ({children, logout}) =>{
    
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light justify-content-between fixed-top">
                    <Link className="navbar-brand mx-2" to="/"> 
                        <img className="img-size rounded-circle" src={image} alt=""></img>
                        <label className="navbar-padding">Classy Book Reading Club</label>
                    </Link>
                    <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse pr-4" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link js-scroll-trigger" to="discussion">
                                    Discussion
                                </Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Books
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="top_books">Top Books</Link>
                                    <Link className="dropdown-item" to="current">Current Book</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to="hot">Whats Hot?
                                        <i className="fas fa-fire"></i>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            {/* <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"></input> */}
                                {/* <Link to="signUp"> */}
                                    <button className="btn border border-secondary my-2 my-sm-0 rounded-pill" onClick={logout}>Log Out</button>
                                {/* </Link> */}
                        </form>
                    </div>
                 </nav>
            {children}
            </div>);
    
}

export default PageWrapper;