import React from 'react';

//////<<<<<------------------------------------------------``


const BotonContact = () => 
{
    window.addEventListener( "scroll", () => 
    { 

        let semaforo = false;
        const btnContact = document.getElementById("btnContact");
        const rowCelulas = document.getElementById("rowCelulas");
        const rowTestimonio = document.getElementById("rowTestimonio");
        const rowInfografia = document.getElementById("rowInfografia");
        const rowProducto = document.getElementById("rowProducto");

        
        let posicionRowCelulas = rowCelulas.getBoundingClientRect().top;
        let posicionRowTestimonio = rowTestimonio.getBoundingClientRect().top;
        let posicionRowInfografia = rowInfografia.getBoundingClientRect().top;
        let posicionRowProducto = rowProducto.getBoundingClientRect().top;


        if( posicionRowCelulas.toFixed(2) <= 218  )
        {
            semaforo = true;
        };

        if( posicionRowTestimonio.toFixed(2) <= 226  )
        {
            semaforo = false;

        };

        if( posicionRowInfografia.toFixed(2) <= 220.26  )
        {
            semaforo = true;

        };

        if( posicionRowProducto.toFixed(2) <= 274  )
        {
            semaforo = false;

        };

        if( semaforo )
        {
            btnContact.classList.remove("color__primaryText");
            btnContact.classList.remove("color__tertiaryBg");

            btnContact.classList.add("color__tertiaryText");
            btnContact.classList.add("color__primaryBg");
        }
        else
        {
            btnContact.classList.remove("color__tertiaryText");
            btnContact.classList.remove("color__primaryBg");

            btnContact.classList.add("color__primaryText");
            btnContact.classList.add("color__tertiaryBg");
        };

    });


///////////////////////////************************************************////////////////////////


    return (
        
        <button id="btnContact" className="btn__btnBaseContact btn color__primaryText color__tertiaryBg">C<br/>o<br/>n<br/>t<br/>a<br/>c<br/>t<br/>a<br/>n<br/>o<br/>s</button>
            
    );
};


//////---------------------------------------------->>>>>


export default BotonContact;
