import Swal from 'sweetalert2';
import { BackendConnect } from '../Backend/BackendConnect';
import { fileUploadCloudinary } from '../Cloudinary/fileUploadCloudinary';
import { swalMsg } from '../Helper/swalMsg';
import { types } from '../Types/types';
import axios from 'axios';


//////<<<<<------------------------------------------------``


const baseUrl = process.env.REACT_APP_API_BASE_URL;
const url = `${ baseUrl }/blogs/blogactions/`
console.log( url )


const startLoadBlogs = () =>
{
    return async ( dispatch ) => 
    {

        try 
        {

            const request = await axios.get( url );
            
            const response = request.data;
  
            if( response.ok )
            {
                dispatch( loadBlogs( response.blogs ) );
                return true;
            }
            else
            {
                Swal.fire( '', "error" , 'error' );
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


const startAddBlog = ( newBlog ) =>
{

    return async ( dispatch ) => 
    {

        try 
        {
            newBlog.url = await fileUploadCloudinary( newBlog.url, newBlog.autor );

            console.log( newBlog  )
            const request = await BackendConnect( 'blogs/blogactions/', newBlog, 'POST' );

            const response = await request.json();

            if( response.ok )
            {
                dispatch( startLoadBlogs() );
                Swal.fire( '', 'Blog creado correctamente' , 'success' );
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


const startUpdateBlog = ( blog ) =>
{
    return async ( dispatch ) => 
    {
        try 
        {
            if( blog.url !== "" )
            {
               blog.url = await fileUploadCloudinary( blog.url, blog.title ); 
            }
            else
            {
                delete blog.url;
            };
            
            const request = await BackendConnect( 'blogs/blogactions/', blog, 'PATCH' );

            const response = await request.json();

            if( response.ok )
            {
                dispatch( startLoadBlogs() );
                Swal.fire( '', 'Blog actualizado correctamente' , 'success' );
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
}


const startDeleteBlog = ( id ) =>
{
    return async ( dispatch ) => 
    {

        try 
        {
            const request = await BackendConnect( 'blogs/blogactions/', { id }, 'DELETE' );
    

            if( request.ok )
            {
                dispatch( startLoadBlogs() );
                Swal.fire( '', 'Blog eliminado correctamente' , 'success' );
                return true;
            };

        } 
        catch( error ) 
        { 
            Swal.fire( '', 'Please contact the administrator' , 'error' );
            return false;   
        };

    };
};


const loadBlogs = ( blogs ) => ( { type : types.loadBlogs, payload : blogs } );

const setActiveBlog = ( blog ) => ( { type : types.setActiveBlog, payload : blog } );

const editOn = () => ( { type : types.setEditState, payload : true } );

const editOff = () => ( { type : types.setEditState, payload : false } );


//////---------------------------------------------->>>>>


export { startLoadBlogs, setActiveBlog, startAddBlog, startUpdateBlog, startDeleteBlog, editOn, editOff  }