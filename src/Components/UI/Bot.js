import React from 'react';
import { useDispatch } from 'react-redux';
import { setActiveBot } from '../../Actions/botActions';


//////<<<<<------------------------------------------------``


const Bot = () => 
{
    
    const dispatch = useDispatch();
    const handleActivate = () =>
    {
        dispatch( setActiveBot( true ) );
    }


///////////////////////////************************////////////////////////


    return (
        
        <div onClick={ handleActivate } className="bot__box base__pointer color__tertiaryBg">
            <img src="https://res.cloudinary.com/djlmqpd2n/image/upload/v1619658882/Landing%20test%20sources/bottest_ddh7i9.gif" style={{ width : "100%" }} alt="bot" />
        </div>
    )
};


//////---------------------------------------------->>>>>


export default Bot;
