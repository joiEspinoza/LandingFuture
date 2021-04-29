import { types } from "../Types/types";


//////<<<<<------------------------------------------------``


const botInitState = 
{
    talk : [],
    activeBot : false,
};

const botReducer = ( state = botInitState, action  ) =>
{
    switch ( action.type ) 
    {
    
        case types.setStateBot : return { ...state, activeBot : action.payload };

        case types.talkHuman : return { ...state, talk : action.payload };

        case types.logout : return botInitState;

        default : return state;
            
    };
};


//////---------------------------------------------->>>>>


export { botReducer };