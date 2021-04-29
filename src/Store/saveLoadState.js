
const saveState = ( state ) =>
{
    if( !state )
    {
        return undefined;
    };

    const data = JSON.stringify( state );

    return localStorage.setItem( "stateLadingFuture", data );
};


const loadState = () =>
{
    const data =  JSON.parse( localStorage.getItem( "stateLadingFuture" ) );

    if( !data )
    {
        return undefined;
    };

    return data;
};

//////---------------------------------------------->>>>>

export { saveState, loadState };
