import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { startLogin } from '../../Actions/authActions';
import { useForm } from '../../Hook/useForm';


//////<<<<<------------------------------------------------``


const Login = () =>
{

    const dispatch = useDispatch();
    const history = useHistory();

    const formInit = 
    { 
        email : "jo.espinoza.91@gmail.com", 
        password : "Kingcamel@t01" 
    };
    const [ formValues, handleInputChange ] = useForm( formInit );
    const { email, password }  = formValues;
    const handleLogin = ( event ) =>
    {
        event.preventDefault();

        dispatch( startLogin( formValues ) )
        .then( ( result ) => {

            if( result )
            {
                history.push( "/blog" );
            };

        });
    };


///////////////////////////************************////////////////////////


    return (
        
        
        <div className="row UI__login">
           
            <div className="col-md-12 p-5 base__alingCenterColum">
               
                <div className="login__boxLogin">

                    <form onSubmit={ handleLogin } >
                        
                        <div className="form-group">
                            <input className="form-control" placeholder="email" name="email" value={ email } onChange={ handleInputChange } />
                        </div>

                        <div className="form-group mt-3">
                            <input className="form-control" type="password" placeholder="password" name="password" value={ password } onChange={ handleInputChange } />
                        </div>

                        <div className="form-group mt-4">
                            <button className="btn btn-primary form-control color__tertiaryBg">Login</button>
                        </div>
                    
                    </form>
                
                </div>
            
            </div>

        </div>
    
    );
};


//////---------------------------------------------->>>>>


export default Login
