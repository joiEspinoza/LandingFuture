import React from 'react';


//////<<<<<------------------------------------------------``


const Productos = () => 
{

  window.addEventListener( "scroll", () => 
  { 

      let semaforo = false;
      const rowProducto = document.getElementById("rowProducto");
      const colInfografiaRose1 = document.getElementById("colInfografiaRose1");
      const colInfografiaRose2 = document.getElementById("colInfografiaRose2")

      let posicionRowProducto = rowProducto.getBoundingClientRect().top;

      if( posicionRowProducto.toFixed(2) <= 667  )
      {
          semaforo = true;

      };

      if( semaforo )
      {
        colInfografiaRose1.classList.add("animate__animated");
        colInfografiaRose1.classList.add("animate__fadeInLeft");
        colInfografiaRose1.classList.add("animate__delay-1s");

        colInfografiaRose2.classList.add("animate__animated");
        colInfografiaRose2.classList.add("animate__fadeInRight");
        colInfografiaRose2.classList.add("animate__delay-1s");
      }
      else
      {
        colInfografiaRose1.classList.remove("animate__animated");
        colInfografiaRose1.classList.remove("animate__fadeInLeft");
        colInfografiaRose1.classList.remove("animate__delay-1s");

        colInfografiaRose2.classList.remove("animate__animated");
        colInfografiaRose2.classList.remove("animate__fadeInRight");
        colInfografiaRose2.classList.remove("animate__delay-1s");
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
        
        <div className="row UI__Productos mt-5 mb-5" id="rowProducto">
            
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

                <div className="row mt-5 mb-5">
                  
                  <div className="col-md-6 base__alingCenter p-4" id="colInfografiaRose1">

                    <div className="base__alingCenterColum base_ml5">
                      <p><i className="far fa-dot-circle" style={{ color : "#b30049" }}></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis at erat id ultrices.</p>
                      <p className="mt-5"><i className="far fa-dot-circle" style={{ color : "#b30049" }}></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis at erat id ultrices.</p>
                    </div>

                    <img loading="lazy" className="base__pointer base_ml5" onClick={handleRedirectRose} src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619040169/Landing%20test%20sources/roseRobot_l0zx5n.png" style={{ width : "30%" }} alt="robEose" />
                   
                  </div>

                  <div className="col-md-6 base__alingCenter" id="colInfografiaRose2">
                  
                    <a id="linkRose" href="https://myfuture.ai/rose/" target="_blank" rel="noreferrer" hidden>asdsad</a>
                    <img loading="lazy" className="base__pointer" onClick={handleRedirectRose} src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619042681/Landing%20test%20sources/inforose3_h5iyge.png" style={{ width : "80%" }} alt="infoRose" />
                  
                  </div>
                  
                </div>
            
          
                     
            </div>

        </div>
    )

}


//////---------------------------------------------->>>>>


export default Productos;
