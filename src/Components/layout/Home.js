import React from 'react';
import { useSelector } from 'react-redux';
import Bot from '../UI/Bot';
import BotonContact from '../UI/BotonContact';
import Celulas from '../UI/Celulas';
import FooterBot from '../UI/FooterBot';
import Infografia from '../UI/Infografia';
import Presentacion from '../UI/Presentacion';
import Productos from '../UI/Productos';
import Tecnologias from '../UI/Tecnologias';
import Testimonios from '../UI/Testimonios';


//////<<<<<------------------------------------------------``


const Home = () => 
{
    
    const { activeBot } = useSelector( state => state.bot );


///////////////////////////************************////////////////////////


    return (
        
        <>

            { activeBot && <FooterBot/> }

            { !activeBot &&  <Bot/> }
           
            
            <BotonContact/>
            
            <Presentacion/>

            <Tecnologias/>

            <Celulas/>

            <Testimonios/>

            <Infografia/>

            <Productos/>

        </>
    )

};


//////---------------------------------------------->>>>>


export default Home;
