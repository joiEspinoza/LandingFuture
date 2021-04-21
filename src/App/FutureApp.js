import React from 'react';
import Presentacion from '../UI/Presentacion';
import NavBar from '../UI/NavBar';
import Tecnologias from '../UI/Tecnologias';
import Celulas from '../UI/Celulas';
import Testimonios from '../UI/Testimonios';
import Infografia from '../UI/Infografia';
import Productos from '../UI/Productos';
import Footer from '../UI/Footer';


//////<<<<<------------------------------------------------``


const FutureApp = () => 
{
    
    return (
        
        <>
            <button className="btn__btnBaseContact btn color__tertiaryBg color__primaryText">C<br/>o<br/>n<br/>t<br/>a<br/>c<br/>t<br/>a<br/>n<br/>o<br/>s</button>
            
            <NavBar/>

            <Presentacion/>

            <Tecnologias/>

            <Celulas/>

            <Testimonios/>

            <Infografia/>

            <Productos/>

            <Footer/>
        
        </>
    )

};


//////---------------------------------------------->>>>>


export default FutureApp;
