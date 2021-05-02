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
            dinamicText.classList.add( "typing" );
        };
        
    };


    const handlePlus = () =>
    {

        setNumText( numText + 1 );

        if(numText >= 2)
        {
            setNumText( 0 );
        };
        
        handleChangeText( numText );

    };


    const handleChangeText = ( num ) =>
    {

        if( num === 0 )
        {
            setText( "Innovación en" );
        }
        else if( num === 1 )
        {
            setText( "Ética en" );
        }
        else if( num === 2 )
        {
            setText( "Transparencia en" );
        };

        const dinamicText = document.getElementById( "dinamicText" );
        if( dinamicText )
        {
            if( num === 1 )
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
       setInterval( handleClick, 3100 ); 

    }, [])

    
///////////////////////////************************************************////////////////////////


    return (
        
        <div className="row UI__precentacion color__tertiaryText pres__BackGround animate__animated animate__fadeIn animate__delay-1s mt-5">
            
            <div className="col-12 col-md-6">
    
                <div className="card base__noBorder animate__animated animate__fadeInLeft animate__delay-2s mt-3" style={{ height : "100%", width : "100%" }}>
                
                    <div className="card-body base__alingCenterColum">
                        
                        <div className="pres__boxText">
                            <p id="dinamicText" className="pres__dianmicTextResponse" style={{ fontSize : "2rem"}} >{text}</p>
                            <h1 className="pres__textResponse">Inteligencia Artificial</h1>
                        </div>

                        <div className="pres__boxText pres__marginTop pres__marginTopTitleText">
                            <h4 className="card-title pres__titlesResponse"><i className="fas fa-microchip"></i> Procesos de principio a fin.</h4> 
                        </div>


                        <div className="pres__boxText pres__marginTop">
                            <h4 className="card-title pres__titlesResponse"><i className="fas fa-microchip"></i> IA Machine Learning customizado y explicado para ti.</h4>
                        </div>


                        <div className="pres__boxText pres__marginTop">
                            <h4 className="card-title pres__titlesResponse"><i className="fas fa-microchip"></i> Desarrollo de Softwares con UI o Serverless.</h4>
                        </div>

                        <button id="btnPlus" hidden onClick={handlePlus} >click</button>
                    </div>

                </div>

            </div>

            <div className="col-12 col-md-6 base__alingCenter">
                
                <div className="card pres__card base__alingCenter base__noBorder animate__animated animate__fadeIn animate__delay-1s">
                
                    <div className="pres__imgBox mt-4 base__alingCenter">
                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618525108/Landing%20test%20sources/brainBase2_c62pkd.gif" alt="brain" className="pres__imgBrain"/>
                    </div>

                </div>

            </div>
            
        </div>
    )
};


//////---------------------------------------------->>>>>


export default Presentacion;
