


const baseUrl = process.env.REACT_APP_API_BASE_URL;

console.log( baseUrl )
const BackendConnect = ( endpoint, data = {}, method = "GET" ) =>
{

    const url = `${ baseUrl }/${ endpoint }`;


    if( method === "GET" )
    {
        return fetch( url );
    }
    else
    {
        return fetch( 
            
            url, 
            { 
                method, 
                headers : { "Content-type" : "application/json" },
                body : JSON.stringify( data )
            } 
        );
        
    };

};

//////---------------------------------------------->>>>>

export { BackendConnect };