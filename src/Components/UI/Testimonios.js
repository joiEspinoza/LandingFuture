import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//////<<<<<------------------------------------------------``


const Testimonios = () => 
{

    const settings = 
    {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      pauseOnHover: true,
      responsive: 
      [{
          breakpoint: 1024,
          settings: 
          {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: 
          {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: 
          {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  
    };

    
    window.addEventListener( "scroll", () => 
    { 
        const rowTestimonio = document.getElementById("rowTestimonio");
        const testiPrincipal = document.getElementById("testiPrincipal");

        if( rowTestimonio && testiPrincipal )
        {
            let rowTestimonioPosition = rowTestimonio.getBoundingClientRect().top;

            if( rowTestimonioPosition.toFixed(2) <= 479 && rowTestimonioPosition.toFixed(2) >= -812.65 )
            {
                testiPrincipal.classList.add("animate__animated");
                testiPrincipal.classList.add("animate__fadeIn");
                testiPrincipal.classList.add("animate__delay-1.5s");
    
    
            }
            else
            {
                testiPrincipal.classList.remove("animate__animated");
                testiPrincipal.classList.remove("animate__fadeIn");
                testiPrincipal.classList.remove("animate__delay-1.5s");
    
            };
        };
       
    });


///////////////////////////************************************************////////////////////////


    return (
        
        <div id="rowTestimonio"  className="row UI__testimonios p-5 color__tertiaryText base__hiddenResponse">
            
            <div className="col-12 col-md-12">
                
                <div className="row">

                <div className="col-md-12">

                    <div className="card p-3 base__noBorder" style={{ height : "100%" }}>
                        <div className="card-body">
                            <center>
                                <h1>- Nuestros clientes nos avalan -</h1>
                            </center>
                        </div>
                    </div>

                </div>

            </div>

                <div className="row mt-3 p-3" id="testiPrincipal" >

                    <div className="col-md-12">
                        
                        <Slider {...settings}>

                            <center>
                                <div className="card base__noBorder test_card" style={{ width : "100%" }}>
                        
                                    <div className="card-body base__overflowAuto">
                                        
                                        
                                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619025204/Landing%20test%20sources/vimac_c3_bxsobt.png" style={{ width : "8%" }} alt="testPrincipalImg"/>
                                        
                                        <p className="mt-4 testi__text">El 98% de nuestros EEPP se hacen a través del flujo creado por future-AI, disminuyendo el trabajo de 15 personas en más de un 50%.<br/>
                                        Hemos logrado evitar imprimir innecesariamente hojas que terminaban almacenadas en carpetas de la oficina central, evitando el traslado injustificado de personal y pasar papeles de mano en mano.<br/>
                                        Entender bien los proceso y datos ha sido fundamental para que el trabajo vía remota sea factible.<br/>
                                        Hemos entendido que la digitalización es un proceso calve dentro del negocio.</p> 
                                        
                                        <p className="card-text  mt-3" style={{ fontSize : "1rem", fontStyle : "oblique" }}><b>María José Ponce</b></p>
                                        
                                        <p className="card-text " style={{ fontSize : "1rem" }}>Jefa control y gestión, Constructora</p>
                                
                                        
                                    </div>
                            
                                </div>
                            </center>

                            <center>
                                <div className="card base__noBorder test_card">
                        
                                    <div className="card-body base__overflowAuto">
                                                
                                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619026372/Landing%20test%20sources/logo_jira_yppkye.png" style={{ width : "15%" }} alt="testPrincipalImg"/>
                                        
                                        <p className="mt-4 testi__text">El trabajo y gestión efectuado por futura AI ha sido fundamental para el éxito del proyecto.<br/>
                                        
                                        La transformación digital era un gran desafío que teníamos pendiente. Antes de trabajar con la nube era impensado realizar teletrabajo, sin embargo, pudimos sobrellevar bien la pandemia super conectados y muy organizados con herramientas como Teams.<br/>  
                                        La aplicación que desarrolló future AI nos ha permitido tener visibilidad del 100% de nuestras mantenciones con un nivel de detalle nunca antes alcanzado.<br/>
                                        Sin duda seguiremos eligiendo a future AI para avanzar en nuestro camino hacia una empresa digital.</p> 
                                        
                                        <p className="card-text  mt-3" style={{ fontSize : "1rem", fontStyle : "oblique" }}><b>Alejandro Torres</b></p>
                                        
                                        <p className="card-text " style={{ fontSize : "1rem" }}>Gerente General</p>
                                
                                        
                                    </div>
                            
                                </div>
                            </center>
                            
                            <center>
                                <div className="card base__noBorder test_card">
                        
                                    <div className="card-body base__overflowAuto">
                                        
                                       
                                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619025204/Landing%20test%20sources/vimac_c3_bxsobt.png" style={{ width : "8%" }} alt="testPrincipalImg"/>
                                        
                                        <p className="mt-4 testi__text">A medida que la empresa fue creciendo, el volumen de temas que abordar también lo fue haciendo. Para organizarnos siempre hemos utilizado bastante el correo, sin embargo, te empiezan a copiar en todos ellos y mi bandeja de entrada siempre estaba llena. Al migrarnos hacia una plataforma como Teams, bien implementada, nos facilitó coordinar mediante chats corporativos y comunicaciones organizadas por temas y equipos.<br/>
                                        Nuestro mayor problema siempre ha sido que tenemos las reuniones fuera de la oficina, pero la información centralizada estaba allá. Esto nos obligaba a duplicar información o no contar con esta en algunas reuniones. Con la Transformación Digital pudimos solucionar este problema estando siempre conectados.<br/>
                                        La rapidez de implementación y la constante colaboración que tuvo future AI fue clave para este proceso complejo de cambio. Cumplieron cabalmente los objetivos propuestos, e incluso, la tecnología anterior no se extraña.<br/>
                                        </p>
                                        
                                        <p className="card-text  mt-3" style={{ fontSize : "1rem", fontStyle : "oblique" }}><b>Daniel Espejo</b></p>
                                        
                                        <p className="card-text " style={{ fontSize : "1rem" }}>Gerente General, Inmobiliaria</p>
                                
                                 
                                
                                    </div>
                            
                                </div>
                            </center>
                           
                        </Slider>
                       
                    </div>
                   
                </div>

                <div className="row mt-5">
                                    
                    <div className="col-md-12">
                        
                        
                        <center>
                            <div className="card base__noBorder test_card base__alingCenterRow">
                                <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619025204/Landing%20test%20sources/vimac_c3_bxsobt.png" style={{ width : "8%" }} alt="log"/>
                                <img className="base_ml5" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619026372/Landing%20test%20sources/logo_jira_yppkye.png" style={{ width : "15%" }} alt="log"/>
                                <img className="base_ml5" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619028067/Landing%20test%20sources/uplanner_c2_ff4v6j.png" style={{ width : "15%" }} alt="log"/>
                                <img className="base_ml5" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619028067/Landing%20test%20sources/vmc_bvxtri.png" style={{ width : "10%" }} alt="log"/>
                                <img className="base_ml5" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619028067/Landing%20test%20sources/fynsa_gy3oy2.png" style={{ width : "15%" }} alt="log"/>
                            </div>
                        </center>                       
                        
                    
                    </div>

                </div>
                
            </div>

        </div>
    )

};


//////---------------------------------------------->>>>>


export default Testimonios;
