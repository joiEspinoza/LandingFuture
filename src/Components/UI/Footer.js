import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { setActiveBot } from '../../Actions/botActions';


//////<<<<<------------------------------------------------``


const Footer = () => 
{
    
    const history = useHistory();
    const location = useLocation();
    const handleBlog = () =>
    {
        history.push( "/blog" );
    };


    const dispatch = useDispatch();
    const handleActivate = () =>
    {
        dispatch( setActiveBot( false ) );
    };


///////////////////////////************************************************////////////////////////


    return (
        
        <div className="row UI__footer color__tertiaryBg color__primaryText p-3">
            
            <div className="col-md-4 p-4 base__alingCenterColum">
            
                <img className="footer__logoFuture" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618929849/Landing%20test%20sources/logofutureAIWhite_f1kehi.png" alt="logo" />
            
                <p style={{ fontSize : "0.8rem" }}><br/>Dirección: Badajoz 100, Oficina 523<br/>Fono: +569 93319395 | +569 54191540</p>

            </div>

            <div className="col-md-4">

                {
                    ( !location.pathname.includes( "blog" ) )  &&
                    <img onClick={ ()=>{ handleBlog(); handleActivate(); }} src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619744635/Landing%20test%20sources/bannerBlog_bnmqsa.gif" style={{ width : "100%", height : "100%" }} />
                }
 
            </div>

            <div className="col-md-4 p-4 base__alingCenterColum">

                <p><b>Síguenos</b></p>
                
                <div className="base__alingCenterRow mt-2" style={{ fontSize : "2rem" }}>
                
                    <a href="https://www.linkedin.com/company/futureai/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="https://twitter.com/myfuture_ai" target="_blank" className="footer__marginRS" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                    <a href="https://www.instagram.com/myfuture_ai/" target="_blank" className="footer__marginRS" rel="noreferrer"><i className="fab fa-instagram-square"></i></a>
                    <a href="https://www.facebook.com/myfutureai" target="_blank" className="footer__marginRS" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
            
                </div>
            
            </div>

        </div>
    )

};


//////---------------------------------------------->>>>>


export default Footer;
