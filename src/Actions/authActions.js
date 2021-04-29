import Swal from 'sweetalert2';
import { BackendConnect } from '../Backend/BackendConnect';
import { swalMsg } from '../Helper/swalMsg';
import { types } from '../Types/types';


//////<<<<<------------------------------------------------``


const startLogin = ( userData ) =>
{
    return async ( dispatch ) => 
    {

        try 
        {
            const request = await BackendConnect( 'auth/login/', userData, 'POST' );

            const response = await request.json();


            if( response.ok )
            {
                dispatch( login( response.user ) );
                return true;
                
            }
            else
            {
                Swal.fire( '', swalMsg( response ) , 'error' );
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


const login = ( user ) => ( { type : types.login, payload : user } );

const logout = () => ( { type : types.logout } )


//////---------------------------------------------->>>>>


export { startLogin, logout }