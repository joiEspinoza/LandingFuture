import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { startLoadBlogs } from '../Actions/blogActions';
import Login from '../Components/auth/Login';
import Admin from '../Components/layout/Admin';
import Blog from '../Components/layout/Blog';
import BlogView from '../Components/layout/BlogView';
import Home from '../Components/layout/Home';
import Footer from '../Components/UI/Footer';
import Loading from '../Components/UI/Loading';
import NavBar from '../Components/UI/NavBar';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';


//////<<<<<------------------------------------------------``


const RouterApp = () => 
{

    const { logged } = useSelector( state => state.auth );
    const { activeBot } = useSelector( state => state.bot );
    const dispatch = useDispatch();
    useEffect(() => 
    {
        
        dispatch( startLoadBlogs() );

    }, [ dispatch ])

    const [ load, setLoad ] = useState( false )


    setTimeout(() => 
    {
        setLoad( true );

    }, 3000 );
 
   

///////////////////////////************************////////////////////////


    return (
        
        <Router>
            
            <div>
                
                { load && <NavBar/>}

                <Switch>
                
                    <Route exact path="/" component={ load ? Home : Loading }/>

                    <PublicRoute isLoggedIn={ logged } exact path="/login" component={  load ? Login : Loading }/>

                    <PrivateRoute isLoggedIn={ logged } exact path="/admin" component={ load ? Admin : Loading }/>

                    <Route isLoggedIn={ logged } exact path="/blog" component={ load ? Blog : Loading }/>

                    <Route isLoggedIn={ logged } exact path="/blogview" component={ load ? BlogView : Loading  }/>

                    <Redirect to="/"/>
 
                </Switch>

                { ( !activeBot && load )  && <Footer/> }
               
            
            </div>
    
    </Router>
    
    );
};


//////---------------------------------------------->>>>>


export default RouterApp;
