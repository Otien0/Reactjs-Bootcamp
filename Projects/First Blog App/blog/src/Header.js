import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <header className="masthead my-img">
                <div className="overlay"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Clean React Blog</h1>
                                <span className="subheading">A Blog Theme by Moryso Through Start Bootstrap Template</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header