import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { startLoadBlogs } from '../Actions/blogActions';
import Login from '../Components/auth/Login';
import Admin from '../Components/layout/Admin';
import Blog from '../Components/layout/Blog';
import BlogView from '../Components/layout/BlogView';
import Home from '../Components/layout/Home';
import Footer from '../Components/UI/Footer';
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


///////////////////////////************************////////////////////////


    return (
        
        <Router>
            
            <div>
                
                <NavBar/>

                <Switch>
                
                    <Route exact path="/" component={ Home }/>

                    <PublicRoute isLoggedIn={ logged } exact path="/login" component={ Login }/>

                    <PrivateRoute isLoggedIn={ logged } exact path="/admin" component={ Admin }/>

                    <Route isLoggedIn={ logged } exact path="/blog" component={ Blog }/>

                    <Route isLoggedIn={ logged } exact path="/blogview" component={ BlogView }/>

                    <Redirect to="/"/>
 
                </Switch>

                { !activeBot &&  <Footer/> }
               
            
            </div>
    
    </Router>
    
    );
};


//////---------------------------------------------->>>>>


export default RouterApp;
