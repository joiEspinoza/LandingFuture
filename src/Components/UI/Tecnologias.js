import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


//////<<<<<------------------------------------------------``


const Tecnologias = () => 
{

  const settings = 
  {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    pauseOnHover: true,
    className: "tecno_responseMarginTopSlider" ,
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


///////////////////////////************************************************////////////////////////


    return (
       
        <div className="row UI__tecnologias animate__animated animate__fadeInUp animate__delay-3s">
            
            <div className="col-md-12 p-4">
                
                <Slider {...settings}>


                    <div className="tecno__boxLogos">
                        <center><img className="tecno__reactLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619716656/Landing%20test%20sources/logos/keras_jjlcjl.png" alt="kerasLogo" /></center>
                    </div>


                    <div className="tecno__boxLogos">
                        <center><img className="tecno__reactLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619716657/Landing%20test%20sources/logos/SpaCy_logo_mus5zt.png" alt="spacyLogo" /></center>
                    </div>


                    <div className="tecno__boxLogos">
                        <center><img className="tecno__tfLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618843505/Landing%20test%20sources/logos/tenso_gg4tz4.png" alt="tfLogo" /></center>
                    </div>


                    <div className="tecno__boxLogos">
                        <center><img className="tecno__reactLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619716656/Landing%20test%20sources/logos/Rasa_nlu_horizontal_purple_g1scsa.png" alt="rasaLogo" /></center>
                    </div>


                    <div className="tecno__boxLogos">
                        <center><img className="tecno__reactLogo2 tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618843505/Landing%20test%20sources/logos/react_ksrx5b.png" alt="ReactLogo" /></center>
                    </div>


                    <div className="tecno__boxLogos">
                        <center><img className="tecno__reactLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619716657/Landing%20test%20sources/logos/django_csisew.png" alt="dJangoLogo" /></center>
                    </div>


                    <div className="tecno__boxLogos">
                        <center><img className="tecno__swaggerLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619716657/Landing%20test%20sources/logos/swagger_ela5bn.png" alt="swaggerLogo" /></center>
                    </div>


                    <div className="tecno__boxLogos">
                        <center><img className="tecno__pythonLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618843505/Landing%20test%20sources/logos/python_awkfti.png" alt="pythonLogo" /></center>
                    </div>


                    <div className="tecno__boxLogos">
                        <center><img className="tecno__ngnxLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619716656/Landing%20test%20sources/logos/nginx_iyyzk4.png" alt="ngnxLogo" /></center>
                    </div>


                    <div className="tecno__boxLogos">
                        <center><img className="tecno__dockerLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618843505/Landing%20test%20sources/logos/docker_x5xifk.png" alt="dockerLogo" /></center>
                    </div>
                    

                    <div className="tecno__boxLogos">
                        <center><img className="tecno__awsLogo tecno__responseLogoAws" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618843505/Landing%20test%20sources/logos/aws_pn5ogm.png" alt="awsLogo" /></center>
                    </div>
                    

                    <div className="tecno__boxLogos">
                        <center><img className="tecno__gooleClLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619745779/Landing%20test%20sources/logos/google-partner_vgszr2.png" alt="googleLogo" /></center>
                    </div>

                    
                    <div className="tecno__boxLogos">
                        <center><img className="tecno__MicrosoftLogo tecno__responseLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619716657/Landing%20test%20sources/logos/microsoft_w3gfso.png" alt="microsoftLogo" /></center>
                    </div>


                </Slider>
            
            </div>
    
        </div>
    )

};


//////---------------------------------------------->>>>>


export default Tecnologias;
