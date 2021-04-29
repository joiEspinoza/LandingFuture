import { types } from "../Types/types";


//////<<<<<------------------------------------------------``


const setActiveBot = ( semaforo ) => ( { type : types.setStateBot, payload : semaforo } );

const setTalkBot = ( talk ) => ( { type : types.talkHuman, payload : talk } );


//////---------------------------------------------->>>>>


export { setActiveBot, setTalkBot }
