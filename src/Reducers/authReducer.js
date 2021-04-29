import { types } from "../Types/types";


//////<<<<<------------------------------------------------``


const authInitState = 
{
    uid : null,
    name : null,
    logged : false
};

const authReducer = ( state = authInitState, action  ) =>
{
    switch ( action.type ) 
    {
    
        case types.login : return { ...state, logged : true , ...action.payload };

        case types.logout : return authInitState;
        
        default : return state;
            
    };
};


//////---------------------------------------------->>>>>


export { authReducer };