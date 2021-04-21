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
                        <center><img className="tecno__dockerLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618843505/Landing%20test%20sources/logos/docker_x5xifk.png" alt="dockerLogo" /></center>
                    </div>
                    
                    <div className="tecno__boxLogos">
                        <center><img className="tecno__awsLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618843505/Landing%20test%20sources/logos/aws_pn5ogm.png" alt="awsLogo" /></center>
                    </div>
                    
                    <div className="tecno__boxLogos">
                        <center><img className="tecno__tfLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618843505/Landing%20test%20sources/logos/tenso_gg4tz4.png" alt="tfLogo" /></center>
                    </div>
                    
                    <div className="tecno__boxLogos">
                        <center><img className="tecno__pythonLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618843505/Landing%20test%20sources/logos/python_awkfti.png" alt="pythonLogo" /></center>
                    </div>

                    <div className="tecno__boxLogos">
                        <center><img className="tecno__reactLogo" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618843505/Landing%20test%20sources/logos/react_ksrx5b.png" alt="reactLogo" /></center>
                    </div>
                   
                    
                </Slider>
            
            </div>
    
        </div>
    )

};


//////---------------------------------------------->>>>>


export default Tecnologias;
