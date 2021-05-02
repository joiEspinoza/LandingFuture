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

    if( rowProducto && colInfografiaRose1 && colInfografiaRose2 )
    {

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
        
        <div className="row UI__Productos mt-3" id="rowProducto">
            
            <div className="col-md-12">
                
              <div className="row mb-3" id="rowTitleRose">

                <div className="col-md-12">

                  <div className="card p-3 base__noBorder">
                        
                    <div className="card-body color__tertiaryText text-center">
                        
                      <h1 className="product__title" >El futuro en RRHH con Inteligencia Artificial</h1>
                  
                    </div>
                    
                  </div>

                </div>

              </div>

              <div className="row mb-5">
                  
                  <div className="col-md-6 base__alingCenterColum product__borderR product__pbResponse" id="colInfografiaRose1">

                    <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619715061/Landing%20test%20sources/cellstatic/PARNERlOGO_mkp5yd.png" alt="logoRose" className="product__logoRosePartner"/>
                    
                    <img loading="lazy" className="base__pointer product__robPartnerRose mt-5" onClick={handleRedirectRose} src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619714850/Landing%20test%20sources/cellstatic/robroseBN_jfledi.gif" alt="robEose" />
                    
                    <div className="card product__card mt-5 text-center">
                      <p> ROB Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis at erat id ultrices.</p>
                    </div>
                    
                  </div>

                  <div className="col-md-6 base__alingCenterColum text-center product__borderL product__ptResponse" id="colInfografiaRose2">

                    <img  className="product__uinfyLogoRose" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619715061/Landing%20test%20sources/cellstatic/unifyLogo_qims3q.png" alt="logoRose"/>
                    <a id="linkRose" href="https://myfuture.ai/rose/" target="_blank" rel="noreferrer" hidden>asdsad</a>
                    
                    <img loading="lazy" className="base__pointer mt-5 product__uinfyInfografRose" onClick={handleRedirectRose} src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619712077/Landing%20test%20sources/cellstatic/inforose3bn_tjkyst.png" alt="infoRose" />
                    
                    <div className="card product__card mt-5">
                      <p> Info Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis at erat id ultrices.</p>
                    </div>
                  
                  </div>
                  
                </div>
                   
            </div>

        </div>
    )

}


//////---------------------------------------------->>>>>


export default Productos;
