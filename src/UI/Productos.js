import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//////<<<<<------------------------------------------------``


const Productos = () => 
{

  window.addEventListener( "scroll", () => 
  { 
      
      const rowTitleRose = document.getElementById("rowTitleRose");
      const rowInfografiaRose = document.getElementById("rowInfografiaRose");

      let posicionRowTitleRose = rowTitleRose.getBoundingClientRect().top;

      if( posicionRowTitleRose.toFixed(2) <= 802.15 && posicionRowTitleRose.toFixed(2) >= -542.65 )
      {
        rowTitleRose.classList.add("animate__animated");
        rowTitleRose.classList.add("animate__fadeInDown");
        rowTitleRose.classList.add("animate__delay-1s");

        rowInfografiaRose.classList.add("animate__animated");
        rowInfografiaRose.classList.add("animate__fadeInUp");
        rowInfografiaRose.classList.add("animate__delay-1s");
          
      }
      else
      {
        rowTitleRose.classList.remove("animate__animated");
        rowTitleRose.classList.remove("animate__fadeInDown");
        rowTitleRose.classList.remove("animate__delay-1s");

        rowInfografiaRose.classList.remove("animate__animated");
        rowInfografiaRose.classList.remove("animate__fadeInUp");
        rowInfografiaRose.classList.remove("animate__delay-1s");

      };

    });

    const handleRedirectRose = () =>
    {
        const linkRose = document.getElementById( "linkRose" );

        if( linkRose )
        {
            linkRose.click();
        };
    };


///////////////////////////************************************************////////////////////////


    return (
        
        <div className="row UI__Productos mt-5 mb-5">
            
            <div className="col-md-12">
                
              <div id="rowTitleRose" className="row">

                <div className="col-md-12">

                    <div className="card p-3 base__noBorder" style={{ height : "100%" }}>
                        <div className="card-body color__tertiaryText">
                            <center>
                                <h1>- El futuro en RRHH con Inteligencia Artificial -</h1>
                            </center>
                        </div>
                    </div>

                </div>

              </div>

                <div className="row" id="rowInfografiaRose">
                  
                  <div className="col-md-12 base__alingCenter">
                  
                    <a id="linkRose" href="https://myfuture.ai/rose/" target="_blank" hidden>asdsad</a>
                    <img loading="lazy" className="base__pointer" onClick={handleRedirectRose} src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618956045/Landing%20test%20sources/infoProductoRoseV2_yzoa1e.gif" style={{ width : "80%" }} />
                  
                  </div>
                  
                </div>
            
          
                     
            </div>

        </div>
    )

}


//////---------------------------------------------->>>>>


export default Productos;
