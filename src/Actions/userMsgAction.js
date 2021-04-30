import Swal from 'sweetalert2';
import { BackendConnect } from '../Backend/BackendConnect';


//////<<<<<------------------------------------------------``


const startAddMsg = ( newMsg ) =>
{

    return async () => 
    {

        try 
        {
            const request = await BackendConnect( 'usermsg/usermsgactions/', newMsg, 'POST' );

            const response = await request.json();

            if( response.ok )
            {

                Swal.fire( '', 'Mensaje enviado correctamente' , 'success' );
                return true;
            }
            else
            {
                Swal.fire( '', response.msg , 'error' );
                return false;  
            };

        } 
        catch( error ) 
        { 
            Swal.fire( '', 'Please contact the administrator' , 'error' );
            return false;   
        };

    };
};


//////---------------------------------------------->>>>>


export { startAddMsg  }