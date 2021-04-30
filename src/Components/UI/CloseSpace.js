import React from 'react'
import { useDispatch } from 'react-redux';
import { setActiveBot } from '../../Actions/botActions';


//////<<<<<------------------------------------------------``


const CloseSpace = () => 
{
    const dispatch = useDispatch();
    const handleActivate = () =>
    {
        dispatch( setActiveBot( false ) );
    }


    ///////////////////////////************************************************////////////////////////


    return (
        
        <div className="base__closeSpace" onClick={ handleActivate }>
            
        </div>
    )
}


//////---------------------------------------------->>>>>


export default CloseSpace;
