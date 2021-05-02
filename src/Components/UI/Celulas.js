import React from 'react';


//////<<<<<------------------------------------------------``


const Celulas = () => 
{
   
    window.addEventListener( "scroll", () => 
    { 
        const rowTitle = document.getElementById("rowTitle");
        const cardCel1 = document.getElementById("cardCel1");
        const cardCel2 = document.getElementById("cardCel2");
        const cardCel2B = document.getElementById("cardCel2B");
        const cardCel3 = document.getElementById("cardCel3");

        if( rowTitle && cardCel1 && cardCel2 && cardCel2B && cardCel3 )
        {
            let posicionRowTitle = rowTitle.getBoundingClientRect().top;

            if( posicionRowTitle.toFixed(2) <= 802.15 && posicionRowTitle.toFixed(2) >= -542.65 )
            {
                rowTitle.classList.add("animate__animated");
                rowTitle.classList.add("animate__fadeIn");
                rowTitle.classList.add("animate__delay-1s");
                
                cardCel1.classList.add("animate__animated");
                cardCel1.classList.add("animate__fadeInLeft");
                cardCel1.classList.add("animate__delay-1s");
    
                cardCel2.classList.add("animate__animated");
                cardCel2.classList.add("animate__fadeIn");
                cardCel2.classList.add("animate__delay-1s");
    
                cardCel2B.classList.add("animate__animated");
                cardCel2B.classList.add("animate__fadeIn");
                cardCel2B.classList.add("animate__delay-1s");
    
                cardCel3.classList.add("animate__animated");
                cardCel3.classList.add("animate__fadeInRight");
                cardCel3.classList.add("animate__delay-1s");
       
            }
            else
            {
                rowTitle.classList.remove("animate__animated");
                rowTitle.classList.remove("animate__fadeIn");
                rowTitle.classList.remove("animate__delay-1s");
    
                cardCel1.classList.remove("animate__animated");
                cardCel1.classList.remove("animate__fadeInLeft");
                cardCel1.classList.remove("animate__delay-1s");
    
                cardCel2.classList.remove("animate__animated");
                cardCel2.classList.remove("animate__fadeIn");
                cardCel2.classList.remove("animate__delay-1s");
    
                cardCel2B.classList.remove("animate__animated");
                cardCel2B.classList.remove("animate__fadeIn");
                cardCel2B.classList.remove("animate__delay-1s");
    
                cardCel3.classList.remove("animate__animated");
                cardCel3.classList.remove("animate__fadeInRight");
                cardCel3.classList.remove("animate__delay-1s");
            };
        };
    
    });

///////////////////////////************************************************////////////////////////


    return (
        
        <div className="row UI__celulas mt-3 p-5 color__primaryText" id="rowCelulas">
            
            <div className="row mb-5 text-center" id="rowTitle">
                
                <h2>Células Ágiles</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse tincidunt sed est at gravida.</p>
 
            </div>
            
            <div className="row">
            
                <div className="col-md-3 base__alingCenter cel__margintopReponse">
                    
                    <div id="cardCel1" className="card base__noBorder base__alingCenter" style={ { width : "18rem", height : "100%" } }>
                        
                        <div className="base__circle base__alingCenter color__primaryBg" style={{ height : "250px", width : "250px" }}>
                            <center>
                                <img className="card-img-top" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619206178/Landing%20test%20sources/celulaTetris_matvjp.gif" alt="sml" style={{ height : "200px", width : "200px" }}/>
                            </center>
                        </div>
                        
                        <div className="card-body text-center">
                            
                            <h5 className="card-title">Data Strategy</h5>
                            <p className="card-text mt-1"><i className="far fa-dot-circle"></i> Tus primeros pasos ML</p>
                            <p className="card-text mt-1"><i className="far fa-dot-circle"></i> Genera cultura de datos</p>
                        
                        </div>
                    
                    </div>
                
                </div>

                <div className="col-md-3 base__alingCenter cel__margintopReponse">
                    
                    <div id="cardCel2" className="card base__noBorder base__alingCenter" style={ { width : "18rem", height : "100%" } }>
                        
                        <div className="base__circle base__alingCenter color__primaryBg" style={{ height : "250px", width : "250px" }}>
                                <img className="card-img-top" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619019188/Landing%20test%20sources/celulaV2-2_qodg33.gif" alt="sml" style={{ height : "200px", width : "200px" }}/>
                        </div>

                        <div className="card-body text-center">
                            <h5 className="card-title">Data Kingdom</h5>
                            <p className="card-text"><i className="far fa-dot-circle"></i> Limpieza y preprocesamiento</p> 
                            <p className="card-text mt-1"><i className="far fa-dot-circle"></i> Labeling de datos</p>
                            <p className="card-text mt-1"><i className="far fa-dot-circle"></i> Data Pipeline</p>
                        
                        </div>
                    
                    </div>
                
                </div>

                <div className="col-md-3 base__alingCenter cel__margintopReponse">
                    
                    <div id="cardCel2B" className="card base__noBorder base__alingCenter" style={ { width : "18rem", height : "100%" } }>
                        
                        <div className="base__circle base__alingCenter color__primaryBg" style={{ height : "250px", width : "250px" }}>
                                <img className="card-img-top" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619023384/Landing%20test%20sources/celulaV2-3_kplyys.gif" alt="sml" style={{ height : "200px", width : "200px" }}/>
                        </div>

                        <div className="card-body text-center">
                            <h5 className="card-title">Data Analytics</h5>
                            <p className="card-text"><i className="far fa-dot-circle"></i> Modelos ML</p> 
                            <p className="card-text mt-1"><i className="far fa-dot-circle"></i> Análisis exploratorio EDA</p>
                            <p className="card-text mt-1"><i className="far fa-dot-circle"></i> Visualización</p>
                        
                        </div>
                    
                    </div>
                
                </div>

                <div className="col-md-3 base__alingCenter cel__margintopReponse">
                    
                    <div  id="cardCel3" className="card base__noBorder base__alingCenter" style={ { width : "18rem", height : "100%" } }>
                    
                        <div className="base__circle base__alingCenter color__primaryBg" style={{ height : "250px", width : "250px" }}>
                            <center>
                                <img className="card-img-top" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619201960/Landing%20test%20sources/celulaDEvDeploy_cruvsn.gif" alt="sml" style={{ height : "200px", width : "200px" }}/>
                            </center>
                        </div>

                        <div className="card-body text-center">
                            <h5 className="card-title">Dev & Deploy</h5>
                            <p className="card-text"><i className="far fa-dot-circle"></i> Desarrollo software ML</p> 
                            <p className="card-text mt-1"><i className="far fa-dot-circle"></i> Levantamiento de API's</p>
                            <p className="card-text mt-1"><i className="far fa-dot-circle"></i> ML Ops, deploy ML</p>
                        
                        </div>
                    
                    </div>
                
                </div>
                
            </div>
        
        </div>
    )

};


//////---------------------------------------------->>>>>


export default Celulas;
