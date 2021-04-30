import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AnuncioBlog from '../UI/AnuncioBlog';
import Bot from '../UI/Bot';
import BotonContact from '../UI/BotonContact';
import Celulas from '../UI/Celulas';
import CloseSpace from '../UI/CloseSpace';
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

            { activeBot && <CloseSpace/> }
            
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
