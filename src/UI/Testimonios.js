import React from 'react';


//////<<<<<------------------------------------------------``


const Testimonios = () => 
{
    
    window.addEventListener( "scroll", () => 
    { 
        const rowTestimonio = document.getElementById("rowTestimonio");
        const testiPrincipal = document.getElementById("testiPrincipal");
        const testiSecundario = document.getElementById("testiSecundario");

        let rowTestimonioPosition = rowTestimonio.getBoundingClientRect().top;

        if( rowTestimonioPosition.toFixed(2) <= 479 && rowTestimonioPosition.toFixed(2) >= -812.65 )
        {
            testiPrincipal.classList.add("animate__animated");
            testiPrincipal.classList.add("animate__fadeInLeft");
            testiPrincipal.classList.add("animate__delay-1.5s");

            testiSecundario.classList.add("animate__animated");
            testiSecundario.classList.add("animate__fadeInRight");
            testiSecundario.classList.add("animate__delay-1.5s");
            
        }
        else
        {
            testiPrincipal.classList.remove("animate__animated");
            testiPrincipal.classList.remove("animate__fadeInLeft");
            testiPrincipal.classList.remove("animate__delay-1.5s");

            testiSecundario.classList.remove("animate__animated");
            testiSecundario.classList.remove("animate__fadeInRight");
            testiSecundario.classList.remove("animate__delay-1.5s");

        };
      
    
    });


///////////////////////////************************************************////////////////////////


    return (
        
        <div id="rowTestimonio"  className="row UI__testimonios p-5 color__tertiaryText">
            
            <div className="col-md-12">
                
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

                <div id="testiPrincipal" className="row">

                    <div className="col-md-12">

                        <div className="card p-3 testi__boxShadow base__noBorder" style={{ height : "100%" }}>
                            
                            <div className="card-body">
                                
                                <div className="row">
                                    
                                    <div className="col-md-4">
                                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618431190/Landing%20test%20sources/TEST1_olb47g.png" loading="lazy" alt="imgExito" style={{ width : "100%" }} />
                                    </div>

                                    <div className="col-md-8">
                                        <img className="base_ml5" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618928694/Landing%20test%20sources/Walmart-logo_cgsgiz.png" style={{ width : "10rem", height : "5rem", marginTop : "-2rem" }} alt="testPrincipalImg"/>
                                        <p className="card-text base_ml5 text-justify mt-2" style={{ fontSize : "1.3rem", fontStyle : "oblique" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus neque ac ex pretium luctus. Aliquam molestie dictum egestas. Donec ac posuere purus. Aliquam nec imperdiet elit, in dapibus arcu. Ut nulla mi, consequat ac placerat sit amet, venenatis non lorem. Duis accumsan ante eu enim porta</p> 
                                        <p className="card-text base_ml5 text-justify mt-3" style={{ fontSize : "1rem", fontStyle : "oblique" }}><b>Homero Simpson</b></p>
                                        <p className="card-text base_ml5 text-justify" style={{ fontSize : "1rem", fontStyle : "oblique" }}>Tecnico en planta nuclear</p>
                                    </div>
                                
                                </div>
                           
                            </div>
                       
                        </div>

                    </div>
                   
                </div>

                <div id="testiSecundario" className="row mt-3 animate__animated animate__fadeInRight">

                    <div className="col-md-4 p-3">

                        <div className="card p-3 testi__boxShadow base__noBorder" style={{ height : "100%" }}>
                            <div className="card-body">
                                <img className="mt-3" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618928694/Landing%20test%20sources/Walmart-logo_cgsgiz.png" style={{ width : "10rem", height : "5rem" }}/>
                                <p className="card-text text-justify mt-2" style={{ fontSize : "1.1rem", fontStyle : "oblique" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus neque ac ex pretium luctus. Aliquam molestie dictum egestas. Donec ac posuere purus. Aliquam nec imperdiet elit, in dapibus arcu. Ut nulla mi, consequat ac placerat sit amet, venenatis non lorem. Duis accumsan ante eu enim porta</p> 
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 p-3">

                        <div className="card p-3 testi__boxShadow base__noBorder" style={{ height : "100%" }}>
                            <div className="card-body">
                                <img className="mt-3" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618928694/Landing%20test%20sources/Walmart-logo_cgsgiz.png" style={{ width : "10rem", height : "5rem" }}/>
                                <p className="card-text text-justify mt-2" style={{ fontSize : "1.1rem", fontStyle : "oblique" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus neque ac ex pretium luctus. Aliquam molestie dictum egestas. Donec ac posuere purus. Aliquam nec imperdiet elit, in dapibus arcu. Ut nulla mi, consequat ac placerat sit amet, venenatis non lorem. Duis accumsan ante eu enim porta</p> 
                            </div>
                        </div>

                    </div>

                    <div className="col-md-4 p-3">

                        <div className="card p-3 testi__boxShadow base__noBorder" style={{ height : "100%" }}>
                            <div className="card-body">
                                <img className="mt-3" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618928694/Landing%20test%20sources/Walmart-logo_cgsgiz.png" style={{ width : "10rem", height : "5rem" }}/>
                                <p className="card-text text-justify mt-2" style={{ fontSize : "1.1rem", fontStyle : "oblique" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dapibus neque ac ex pretium luctus. Aliquam molestie dictum egestas. Donec ac posuere purus. Aliquam nec imperdiet elit, in dapibus arcu. Ut nulla mi, consequat ac placerat sit amet, venenatis non lorem. Duis accumsan ante eu enim porta</p> 
                            </div>
                        </div>

                    </div>

                </div>

                <div className="row">

                    <div className="col-md-12">

                        <div className="card p-3 base__noBorder" style={{ height : "100%" }}>
                            <div className="card-body">
                                <center>
                                    <h1>- <i className="far fa-dot-circle"></i> -</h1>
                                </center>
                            </div>
                        </div>

                    </div>

                </div>
            
            </div>

        </div>
    )

};


//////---------------------------------------------->>>>>


export default Testimonios;
