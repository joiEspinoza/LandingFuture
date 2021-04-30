import React from 'react'
import { useDispatch } from 'react-redux';
import { setActiveBot } from '../../Actions/botActions';


//////<<<<<------------------------------------------------``


const Loading = () => 
{
   
    return (
        
        <div>
            <center>
                <div style={{ marginTop : "20%" }}>
                    <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619742769/Landing%20test%20sources/loadingLandingFuture_dyiyue.gif" alt="load" style={{ width : "7rem", height : "9rem" }} />
                </div>
            </center>
        </div>
    )
}


//////---------------------------------------------->>>>>


export default Loading;
