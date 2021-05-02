import React from 'react';


//////<<<<<------------------------------------------------``


const Infografia = () => 
{
    
    window.addEventListener( "scroll", () => 
    { 
        const rowInfografia = document.getElementById("rowInfografia");
        const cardInfo = document.getElementById("cardInfo");

        if( rowInfografia && cardInfo )
        {
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
        };
        
    });

///////////////////////////************************************************////////////////////////


    return (
        
        <div className="row UI__infografia mt-3 p-5 base__hiddenResponse" id="rowInfografia">
            
            <div className="col-md-12 base__alingCenter">
                
                <img id="cardInfo" loading="lazy" className="info_img" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619710897/Landing%20test%20sources/cellstatic/InfografiaFuture22222_p7cpel.gif" alt="sw1"/>
                
            </div>
     
        </div>
    )

};


//////---------------------------------------------->>>>>


export default Infografia;
