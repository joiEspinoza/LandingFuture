import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { blogReducer } from "./blogReducer";
import { botReducer } from "./botReducer";


//////<<<<<------------------------------------------------``


const rootReducer = combineReducers({

 
    auth : authReducer,
    blogs : blogReducer,
    bot : botReducer
    
});


//////---------------------------------------------->>>>>


export { rootReducer };