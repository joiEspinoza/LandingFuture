import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { logout } from '../../Actions/authActions';
import { setActiveBot } from '../../Actions/botActions';
import { useForm } from '../../Hook/useForm';


//////<<<<<------------------------------------------------``


const NavBar = () => 
{
    const location = useLocation();
    const dispatch = useDispatch();
    const history = useHistory();
    const { logged } = useSelector( state => state.auth );

    const handleBlog = () =>
    {
        history.push( "/blog" );
    }

 
    const handleActivate = () =>
    {
        dispatch( setActiveBot( false ) );
    }
    
    
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


    const handleRedirect = ( urlSelect ) =>
    {
        if( urlSelect === "logout" )
        {
            dispatch( logout() );
        };


        history.push( urlSelect )
    }
   


   /*
    const handleScrollPosition = () =>
    {
        let y = window.scrollY;
        console.log( y );
    };
    */

    const scrollTo = ( position ) =>
    {
        window.scroll( 0, position )
    };
    
    //window.onscroll = handleScrollPosition;

///////////////////////////************************////////////////////////


    return (

      
        location.pathname === "/" ?

        <nav className="navbar-light UI__nav color__tertiaryBg animate__animated animate__fadeInDown animate__delay-0.5s nav__response">
        
            <div className="row container-fluid color__primaryText">
        
                <div className="col-12 col-md-2">
                    
                    <div className="nav__boxLogo base__alingCenter">

                        <img className="base__pointer nav__logoFuture" onClick={ handleHome } src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618929849/Landing%20test%20sources/logofutureAIWhite_f1kehi.png" alt="logo" />

                    </div>
                
                </div>

                <div className="col-12 col-md-2 base__alingLine mt-2 base__hiddenResponse" style={{ fontSize : "1.1rem" }}>

                    <span onClick={ () => { scrollTo( 0 ); } } className="base__pointer base__marginRight2Rem mt-3" style={{ width : "100%" }}>¿Qué hacemos?</span>

                </div>

                <div className="col-12 col-md-1 base__alingLine mt-2 base__hiddenResponse" style={{ fontSize : "1.1rem" }}>

                    <span onClick={ () => { scrollTo( 670 ); } } className="base__pointer base__marginRight2Rem mt-3" style={{ width : "100%" }}>Celulas</span>

                </div>

                <div className="col-12 col-md-2 base__alingLine mt-2 base__hiddenResponse" style={{ fontSize : "1.1rem" }}>

                    <span onClick={ () => { scrollTo( 1330 ); } } className="base__pointer base__marginRight2Rem text-center mt-3" style={{ width : "100%" }}>Testimonio</span>

                </div>

                <div className="col-12 col-md-2 base__alingLine  mt-2 base__hiddenResponse" style={{ fontSize : "1.1rem" }}>

                    <span onClick={ () => { scrollTo( 2150 ); } } className="base__pointer base__marginRight2Rem text-center mt-3" style={{ width : "100%" }}>Metodología</span>

                </div>

                <div className="col-12 col-md-2 base__alingLine  mt-2 base__hiddenResponse" style={{ fontSize : "1.1rem" }}>

                    <span onClick={ () => { scrollTo( 3050 ); } } className="base__pointer base__marginRight2Rem text-center mt-3" style={{ width : "100%" }}>Softwares</span>

                </div>

                <div className="col-12 col-md-1 base__alingLine  mt-2 base__hiddenResponse" style={{ fontSize : "1.1rem" }}>

                    <span onClick={ ()=>{ handleActivate(); handleBlog(); } } className="base__pointer base__marginRight2Rem text-center mt-3" style={{ width : "100%" }}>Blog</span>
                    
                </div>

            </div>
        
        </nav>
            
        :

        logged ? 
        
        <nav className="nav__navBlog navbar navbar-light UI__nav color__tertiaryBg animate__animated animate__fadeInDown animate__delay-0.5s nav__response">
        
            <div className="container-fluid color__primaryText">
        
                <div className="row">
                   
                   <div className="col-md-2">

                        <div className="nav__boxLogo base__alingCenter">

                            <img className="base__pointer nav__logoFuture" onClick={ handleHome } src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618929849/Landing%20test%20sources/logofutureAIWhite_f1kehi.png" alt="logo" />

                        </div>

                   </div>

                   <div className="col-md-10">

                        <div className="dropdown">

                            <button className="nav__dropdownListBlogs color__tertiaryBg btn btn-primary dropdown-toggle bg-primary text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"></button>

                            <ul className="dropdown-menu nav__dropdownListBlogs" aria-labelledby="dropdownMenuButton1">

                                <l1 className="base__pointer" onClick={ () => { handleRedirect( "/admin" ) } } >Nuevo Blog</l1>
                                <br/>
                                <l1 className="base__pointer" onClick={ () => { handleRedirect( "/blog" ) } } >Blogs</l1>
                                <br/>
                                <l1 className="base__pointer" onClick={ () => { handleHome(); } } >Volver</l1>
                                <br/>
                                <l1 className="base__pointer" onClick={ () => { handleRedirect( "logout" ) } } >Logout</l1>
                            
                            </ul>
                            
                        </div>
                    
                    </div>
                
                </div>

            </div>
        
        </nav>
        
        :

        <nav className="nav__navBlog navbar navbar-light UI__nav color__tertiaryBg animate__animated animate__fadeInDown animate__delay-0.5s nav__response">
        
            <div className="container-fluid color__primaryText">
        
    
                <div className="row">
                
                <div className="col-md-2">

                        <div className="nav__boxLogo base__alingCenter">

                            <img className="base__pointer nav__logoFuture" onClick={ handleHome } src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618929849/Landing%20test%20sources/logofutureAIWhite_f1kehi.png" alt="logo" />

                        </div>

                </div>


                    <div className="col-md-10">

                        <button onClick={ handleHome } className="color__tertiaryBg btn btn-primary nav__btnBackLogOff">Volver</button>
                        
                    </div>
                
                </div>

            </div>
        
        </nav>

    )

};


//////---------------------------------------------->>>>>


export default NavBar;
