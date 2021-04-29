import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveBot, setTalkBot } from '../../Actions/botActions';
import { useForm } from '../../Hook/useForm';


//////<<<<<------------------------------------------------``


const FooterBot = () => 
{
    
    const dispatch = useDispatch();
    const handleActivate = () =>
    {
        dispatch( setActiveBot( false ) );
    }

    const { talk } = useSelector( state => state.bot )
    const initFormValue = { human : "" }
    const [ formValues, handleInputChange ] = useForm( initFormValue );
    const { human } = formValues;
    const handleChat = ( event ) =>
    {   
       
        event.preventDefault();
    
        talk.push( "human@"+human );
        dispatch( setTalkBot( talk ) )

        document.getElementById( "chatBot" ).scrollTo({
            top: 10000000000000,
            behavior: 'smooth',
        })

    };


    const handleClearTalk = () =>
    {
        dispatch( setTalkBot( [] ) );
    };


///////////////////////////************************////////////////////////


    return (
        
        <div className="row UI__footer2 color__tertiaryBg color__primaryText p-3 animate__animated animate__fadeInUp">
            
        <div className="col-md-4 p-4 ">

            <div className="row mt-2">
                <center className="mb-3"><p>Células agiles</p></center>
                <div className="col-md-3">

                   <div className="footer__cell" data-toggle="tooltip" data-placement="top" title="Desarrollo software ML">
                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619653750/Landing%20test%20sources/cellstatic/stra_ryxs6u.png" alt="celFooterr" style={{ width : "100%" }}/>
                   </div>
               
               </div>

                <div className="col-md-3">

                    <div className="footer__cell" data-toggle="tooltip" data-placement="top" title="Data Pipeline">
                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619653750/Landing%20test%20sources/cellstatic/pipe_gizh24.png" alt="celFooterr" style={{ width : "100%" }}/>
                    </div>
                
                </div>

                <div className="col-md-3">

                    <div className="footer__cell" data-toggle="tooltip" data-placement="top" title="Visualización">
                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619653750/Landing%20test%20sources/cellstatic/ana_ztxstx.png" alt="celFooterr" style={{ width : "100%" }}/>
                    </div>
                
                </div>

                <div className="col-md-3">

                    <div className="footer__cell" data-toggle="tooltip" data-placement="top" title="Genera cultura de datos">
                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619653750/Landing%20test%20sources/cellstatic/celulaTetris_vdbwnf.png" alt="celFooterr" style={{ width : "100%" }}/>
                    </div>
                
                </div>
            
            </div>

            <div className="row mt-3">
                <center className="mb-3"><p>Células agiles</p></center>
                <div className="col-md-3 ">

                    <div className="footer__cell" data-toggle="tooltip" data-placement="top" title="Computer vision">
                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619656625/Landing%20test%20sources/cellstatic/ojo_vd4nke.png" alt="celFooterr" style={{ width : "100%" }}/>
                    </div>

                </div>

                <div className="col-md-3">

                    <div className="footer__cell" data-toggle="tooltip" data-placement="top" title="NLP">
                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619656625/Landing%20test%20sources/cellstatic/nlp_y6yqc5.png" alt="celFooterr" style={{ width : "100%" }}/>
                    </div>

                </div>

                <div className="col-md-3">

                    <div className="footer__cell" data-toggle="tooltip" data-placement="top" title="Video Analytics">
                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619656625/Landing%20test%20sources/cellstatic/VIDEO_jyepot.png" alt="celFooterr" style={{ width : "100%" }}/>
                    </div>

                </div>

                <div className="col-md-3">

                    <div className="footer__cell" data-toggle="tooltip" data-placement="top" title="Forecasting ">
                        <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619657303/Landing%20test%20sources/cellstatic/forecasting_xnmb1v.png" alt="celFooterr" style={{ width : "100%" }}/>
                    </div>

                </div>

            </div>

            <div className="row mt-5">
                
                <div className="col-md-12 base__alingCenterColum">

                    <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1618929849/Landing%20test%20sources/logofutureAIWhite_f1kehi.png" alt="logo" style={{ width : "25%" }} />
            
                    <p style={{ fontSize : "0.8rem" }}><br/>Dirección: Badajoz 100, Oficina 523<br/>Fono: +569 93319395 | +569 54191540</p>

                </div>
            
            </div>
            
        </div>

        <div className="col-md-4 mt-2">

            <div className="row">
                  

                <div className="col-md-12">
                    
                 
                    <div className="footer__boxBot mt-2">

  
                        <div className="footer__chatBox" id="chatBot">

                            <div className="footer__HeaderBot base__alingLine">

                                <div onClick={ ()=>{ handleClearTalk(); handleActivate(); } } className="footer_boxImg" style={{ marginRight : "1rem" }} >

                                    <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619659670/Landing%20test%20sources/bottest2_swqr6n.gif" alt="bot" style={{ width : "100%" }} />

                                </div>

                                <p>Bot<br/><small style={{ fontSize : "0.8rem" }}><i className="fas fa-circle" style={{ color : "green" }}></i> Online</small></p>

                            
                            </div>
                            
                            
                            <div className="row">

                                
                                {
                                    talk.map( ( element, index ) => 
                                    {

                                        return <div className="col-md-12" key={ index }>
                                            
                                            <span className="badge badge-pill badge-primary footer__card mt-2 animate__animated animate__fadeIn">{ element.substr( 6 ) }</span>


                                        </div>

                                    })
                                }


                            </div>

                        </div>

                     
                            
                            <div className="form-group mt-3">
                                
                                <div className="input-group">
                                    
                                    <input type="text" className="form-control" name="human" autoComplete="off" value={ human } onChange={ handleInputChange }/>
                                    
                                    <div className="input-group-append">
                                        <button onClick={ handleChat } className="btn btn-primary color__tertiaryBg footer__btnChat"><i className="fas fa-paper-plane"></i></button>
                                    </div>
                                
                                </div>
                        
                            </div>
                            
                   


                        </div>
                
                </div>
                    
            </div>
           
        </div>

        <div className="col-md-4 p-4">

            <div className="row">
                
                <div className="col-md-12 mt-5 base__alingCenterColum">
                                
                    <div className="footer__boxGif mt-5">

                     <img className="img-fluid" src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619637273/Landing%20test%20sources/tenor_gcledc.gif" alt="gif" style={{ width : "100%", height : "100%" }}/>

                    </div>
                    
                </div>

                <div className="col-md-12 base__alingCenterColum" style={{ marginTop : "4rem" }}>

                    <p><b>Síguenos</b></p>
                
                    <div className="base__alingCenterRow mt-2" style={{ fontSize : "2rem" }}>
                    
                        <a href="https://www.linkedin.com/company/futureai/" target="_blank" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
                        <a href="https://twitter.com/myfuture_ai" target="_blank" className="footer__marginRS" rel="noreferrer"><i className="fab fa-twitter-square"></i></a>
                        <a href="https://www.instagram.com/myfuture_ai/" target="_blank" className="footer__marginRS" rel="noreferrer"><i className="fab fa-instagram-square"></i></a>
                        <a href="https://www.facebook.com/myfutureai" target="_blank" className="footer__marginRS" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
                
                    </div>

                </div>
            
            </div>
           
        </div>

    </div>
    )

};


//////---------------------------------------------->>>>>


export default FooterBot;
