import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { logout } from '../../Actions/authActions';
import { setActiveBot } from '../../Actions/botActions';


//////<<<<<------------------------------------------------``


const NavBar = () => 
{
    const location = useLocation();
    const dispatch = useDispatch();
    const { logged } = useSelector( state => state.auth );

    const history = useHistory();
    const handleBlog = () =>
    {
        history.push( "/blog" );
    };


    const handleHome = () =>
    {
        if( location.pathname === "/blogview" )
        {
            history.push( "/blog" )
        }
        else
        {
           history.push( "/" ); 
        };

    };


    const handleAdmin = () =>
    {
        history.push( "/admin" );
    };


    const handleLogout = () =>
    {
        dispatch( logout() )
    };


    const handleActivate = () =>
    {
        dispatch( setActiveBot( false ) );
    }

///////////////////////////************************////////////////////////


    return (

      
        location.pathname === "/" ?

        <nav className="navbar navbar-light UI__nav color__tertiaryBg animate__animated animate__fadeInDown animate__delay-0.5s">
        
            <div className="container-fluid color__primaryText">
        
                <div className="col-12 col-md-2">
                    
                    <div className="nav__boxLogo base__alingCenter">

                        <img className="base__pointer" onClick={ handleHome } src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618929849/Landing%20test%20sources/logofutureAIWhite_f1kehi.png" alt="logo" style={{ width : "45%"  }} />

                    </div>
                
                </div>

                <div className="col-12 col-md-2 base__alingLine mt-2" style={{ fontSize : "1.1rem" }}>

                    <span className="base__pointer base__marginRight2Rem text-center" style={{ width : "100%" }}>¿Qué hacemos?</span>

                </div>

                <div className="col-12 col-md-2 base__alingLine mt-2" style={{ fontSize : "1.1rem" }}>

                    <span className="base__pointer base__marginRight2Rem text-center" style={{ width : "100%" }}>Exitos</span>

                </div>

                <div className="col-12 col-md-2 base__alingLine mt-2" style={{ fontSize : "1.1rem" }}>

                    <span className="base__pointer base__marginRight2Rem text-center" style={{ width : "100%" }}>Testimonio</span>

                </div>

                <div className="col-12 col-md-2 base__alingLine  mt-2" style={{ fontSize : "1.1rem" }}>

                    <span className="base__pointer base__marginRight2Rem text-center" style={{ width : "100%" }}>Softwares</span>

                </div>

                <div className="col-12 col-md-2 base__alingLine  mt-2" style={{ fontSize : "1.1rem" }}>

                    <span onClick={ ()=>{ handleActivate(); handleBlog(); } } className="base__pointer base__marginRight2Rem text-center" style={{ width : "100%" }}>Blog</span>
                    
                </div>

            </div>
        
        </nav>
            
        :

        <nav className="navbar navbar-light UI__nav color__tertiaryBg animate__animated animate__fadeInDown animate__delay-0.5s">
        
            <div className="container-fluid color__primaryText">
        
                <div className="col-12 col-md-2">
                    
                    <div className="nav__boxLogo base__alingCenter">

                        <img className="base__pointer" onClick={ handleHome } src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618929849/Landing%20test%20sources/logofutureAIWhite_f1kehi.png" alt="logo" style={{ width : "45%"  }} />

                    </div>
                
                </div>

                <div className="col-12 col-md-2 base__alingLine mt-2" style={{ fontSize : "1.1rem" }}>

                </div>

                <div className="col-12 col-md-2 base__alingLine mt-2" style={{ fontSize : "1.1rem" }}>
                
                { logged && <span onClick={handleBlog} className="base__pointer base__marginRight2Rem text-center" style={{ width : "100%" }}>Blog</span> }

                </div>

                <div className="col-12 col-md-2 base__alingLine mt-2" style={{ fontSize : "1.1rem" }}>

                    { logged && <span onClick={ handleAdmin } className="base__pointer base__marginRight2Rem text-center" style={{ width : "100%" }}>Crear Blog</span> }

                </div>

                <div className="col-12 col-md-2 base__alingLine  mt-2" style={{ fontSize : "1.1rem" }}>

                    { logged && <span onClick={ handleLogout } className="base__pointer base__marginRight2Rem text-center" style={{ width : "100%" }}>Logout</span> }

                </div>

                <div className="col-12 col-md-2 base__alingLine  mt-2" style={{ fontSize : "1.1rem" }}>

                    <span  onClick={ handleHome } className="base__pointer base__marginRight2Rem text-center" style={{ width : "100%" }}>Volver</span>

                </div>

            </div>
        
        </nav>

    )

};


//////---------------------------------------------->>>>>


export default NavBar;
