import React from 'react';


//////<<<<<------------------------------------------------``


const Infografia = () => 
{
    
    window.addEventListener( "scroll", () => 
    { 
        const rowInfografia = document.getElementById("rowInfografia");
        const cardInfo = document.getElementById("cardInfo");


        let posicionRowInfografia = rowInfografia.getBoundingClientRect().top;

        if( posicionRowInfografia.toFixed(2) <= 802.15 && posicionRowInfografia.toFixed(2) >= -542.65 )
        {
            cardInfo.classList.add("animate__animated");
            cardInfo.classList.add("animate__fadeIn");
            cardInfo.classList.add("animate__delay-1s");
            
        }
        else
        {
            cardInfo.classList.remove("animate__animated");
            cardInfo.classList.remove("animate__fadeIn");
            cardInfo.classList.remove("animate__delay-1s");

        };
      
    
    });

///////////////////////////************************************************////////////////////////


    return (
        
        <div className="row UI__infografia mt-3 p-5" id="rowInfografia">
            
            <div className="col-md-12 base__alingCenter p-5">
                
                <div id="cardInfo" className="card p-3 mt-4" style={{ width : "auto", height : "100%" }}>
                    
                    <img loading="lazy" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618874108/Landing%20test%20sources/InfografiaBaseAnimation4_jlazil.gif" alt="sw1"/>
                
                </div>
            
            </div>
     
        </div>
    )

};


//////---------------------------------------------->>>>>


export default Infografia;
