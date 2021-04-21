import React, { useEffect, useState } from 'react';


//////<<<<<------------------------------------------------``


const Presentacion = () => 
{
    
    const [ text, setText ] = useState( "" )
    const [ numText, setNumText ] = useState( 0 )

    const handleClick = () =>
    {
        const btnPlus = document.getElementById("btnPlus");

        if( btnPlus )
        {
            btnPlus.click();
        };

        const dinamicText = document.getElementById( "dinamicText" );
        if( dinamicText )
        {
            dinamicText.classList.add("typing");
        };
        
    };


    const handlePlus = () =>
    {

        setNumText( numText + 1 );

        if(numText >= 3)
        {
            setNumText( 0 );
        };
        
        handleChangeText( numText );

    };


    const handleChangeText = ( num ) =>
    {

        if( num === 0 )
        {
            setText( "Líderes en" );
        }
        else if( num === 1 )
        {
            setText( "Innovación en" );
        }
        else if( num === 2 )
        {
            setText( "Ética en" );
        }
        else if( num === 3 )
        {
            setText( "Transparencia en" );
        };

        const dinamicText = document.getElementById( "dinamicText" );
        if( dinamicText )
        {
            if(num === 1 || num === 3)
            {
                dinamicText.classList.add("color__secundaryText");
            }
            else
            {
                dinamicText.classList.remove("color__secundaryText");
            };
        };
        
    };


    useEffect(() => 
    {
       setInterval( handleClick, 3000 ); 

    }, [])

    

   
    


///////////////////////////************************************************////////////////////////


    return (
        
        <div className="row UI__precentacion color__tertiaryText pres__BackGround animate__animated animate__fadeIn animate__delay-1s mt-2">
            
            <div className="col-12 col-md-6">
    
                <div className="card base__noBorder animate__animated animate__fadeInLeft animate__delay-2s mt-3" style={{ height : "100%", width : "100%" }}>
                
                    <div className="card-body base__alingCenterColum" style={{ marginTop : "-15%" }}>
                        
                        <div className="pres__boxText">
                            <p id="dinamicText" style={{ fontSize : "2rem"}} >{text}</p>
                            <h1>Inteligencia Artificial</h1>
                        </div>

                        <div className="pres__boxText" style={{ marginTop : "4rem" }}>
                            <h4 className="card-title"><i className="fas fa-microchip color__secundaryText"></i> Procesos de principio a fin.</h4> 
                        </div>


                        <div className="pres__boxText">
                            <h4 className="card-title"><i className="fas fa-microchip color__secundaryText"></i> IA Machine Learning customizado y explicado para ti.</h4>
                        </div>


                        <div className="pres__boxText">
                            <h4 className="card-title"><i className="fas fa-microchip color__secundaryText"></i> Desarrollo de Softwares con UI o Serverless.</h4>
                        </div>

                        <button id="btnPlus" hidden onClick={handlePlus} >click</button>
                    </div>

                </div>

            </div>

            <div className="col-12 col-md-6">
                
                <div className="card p-5 base__noBorder animate__animated animate__fadeIn animate__delay-1s">
                
                    <div className="card-body base__alingCenterColum" style={{ paddingLeft : "4rem" }}>
                        
                        <div className="pres__imgBox mb-3 mt-3">
                            <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618525108/Landing%20test%20sources/brainBase2_c62pkd.gif" alt="brain" style={{ width : "80%" }}/>
                        </div>

                    </div>

                </div>

            </div>
            
        </div>
    )
};


//////---------------------------------------------->>>>>


export default Presentacion;
