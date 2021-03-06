import React from 'react';
import { Provider } from 'react-redux';
import RouterApp from '../Router/RouterApp';
import { store } from '../Store/store';


//////<<<<<------------------------------------------------``


const FutureApp = () => 
{
    
    return (

        <Provider store={ store }>
            
            <RouterApp/>
        
        </Provider>
    );

};


//////---------------------------------------------->>>>>


export default FutureApp;
