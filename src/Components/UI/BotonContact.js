import React, { useState } from 'react';
import Modal from 'react-modal';

//////<<<<<------------------------------------------------``


const BotonContact = () => 
{

    const customStyles = 
    {
        
        content : 
        {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)'
        }
    };


    const [ modalIsOpen, setIsOpen ] = useState( false );
    const openModal = () =>
    {
        
        setIsOpen(true);
        
    };


    const closeModal = () =>
    {
        
        setIsOpen(false);
        
    };


    window.addEventListener( "scroll", () => 
    { 

        let semaforo = false;
        const btnContact = document.getElementById("btnContact");
        const rowCelulas = document.getElementById("rowCelulas");
        const rowTestimonio = document.getElementById("rowTestimonio");
        const rowInfografia = document.getElementById("rowInfografia");
        const rowProducto = document.getElementById("rowProducto");

        
        if( btnContact && rowCelulas && rowTestimonio && rowInfografia && rowProducto )
        {

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
        }

      

    });


///////////////////////////************************************************////////////////////////


    return (
        
        <>

            <button onClick={ openModal } id="btnContact" className="btn__btnBaseContact btn color__primaryText color__tertiaryBg"><div className="btnLetter">Contactanos <i className="fas fa-rocket"></i></div></button>
            
            <Modal
            
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            className="modal"
            ariaHideApp={false}

            >
               
                <div>
                   
                   <center>
                       <img className="mb-3"src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618498376/Landing%20test%20sources/future-ai_vklped.png" alt="logoFuture" style={{ width : "25%" }}/>
                       <span><h4>Tráenos tu desafío </h4></span>
                       <p style={{ fontStyle : "oblique", fontSize : "0.8rem" }}>“sí torturas suficientemente a los datos puede que terminen confesando”</p>
                    </center>
                
                </div>
                
                <form>
                    
                    <div className="form-group mt-4">
                        <input className="form-control" placeholder="Nombre y apellido"/>
                    </div>
                    
                    <div className="form-group mt-3">
                        <input className="form-control" type="mail" placeholder="Email"/>
                    </div>
                    
                    <div className="form-group mt-3">
                        <input className="form-control" placeholder="Teléfono"/>
                    </div>
                    
                    <div className="form-group mt-3">
                        <input className="form-control" placeholder="Empresa"/>
                    </div>
                    
                    <div className="form-group mt-3">
                        <textarea className="form-control" placeholder="Mensaje" rows="8" cols="50"></textarea>
                    </div>

                    <div className="form-group mt-4">
                       <button className="btn btn-primary form-control color__primaryText color__tertiaryBg">Enviar</button>
                    </div>
                
                </form>
            
            </Modal>
      
      </>
    
    );
};


//////---------------------------------------------->>>>>


export default BotonContact;
