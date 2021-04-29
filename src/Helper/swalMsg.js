

const swalMsg = ( response = {} ) =>
{

    if( !response.errors )
    {

        return response.msg;
    
    }
    else if( response.errors.password )
    {

        return response.errors.password.msg;

    }
    else if( response.errors.email )
    {
        
        return response.errors.email.msg;

    }
    else if( response.errors.userName )
    {
        
        return response.errors.userName.msg;

    }
    else if( response.errors.title )
    {

        return response.errors.title.msg;

    }
    else if( response.errors.autor )
    {

        return response.errors.autor.msg;

    }
    else if( response.errors.textBody )
    {

        return response.errors.textBody.msg;

    }
    else if( response.errors.date )
    {

        return response.errors.date.msg;

    }
    else if( response.errors.stock )
    {

        return response.errors.stock.msg;

    }
    else if( response.errors.rate )
    {

        return response.errors.rate.msg;

    }
    else if( response.errors.url )
    {

        return response.errors.url.msg;

    }
    else if( response.errors.url2 )
    {

        return response.errors.url2.msg;

    }
    else if( response.errors.descr )
    {

        return response.errors.descr.msg;

    }; 

};


const swalMsg2 = ( response = {} ) =>
{

    if( !response.errors )
    {

        return response.msg;

    }
    else if( response.errors.oldPassword )
    {

        return response.errors.oldPassword.msg;

    }
    else if( response.errors.newPassword )
    {

        return response.errors.newPassword.msg;

    }
    else if( response.errors.search )
    {

        return response.errors.search.msg;

    };

};

//////---------------------------------------------->>>>>

export { swalMsg, swalMsg2 };