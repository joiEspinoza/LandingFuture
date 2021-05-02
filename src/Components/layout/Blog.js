import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editOn, setActiveBlog, startDeleteBlog } from '../../Actions/blogActions';


//////<<<<<------------------------------------------------``


const Blog = () => 
{
    
    const { blogs } = useSelector( state => state.blogs );
    const { logged } = useSelector( state => state.auth );
    const history = useHistory();
    const dispatch = useDispatch();


    const handleRedirectView = () =>
    {
        history.push( "/blogview" );
    };

    const handleSetActiveBlog = ( blogId ) =>
    {
        const blog = blogs.find( ( blog ) => blog.id === blogId );
        dispatch( setActiveBlog( blog )  );
    };


    const handleDeleteBlog = ( blogId ) =>
    {
         dispatch( startDeleteBlog( blogId ) );
    };


    const handleUpdateBlog = ( blogId ) =>
    {
        dispatch( editOn() );
        handleSetActiveBlog( blogId );
        history.push( "/blogview" );
    };


    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0; 
  

///////////////////////////************************////////////////////////


    return (
        
        <div className="row UI__blog mt-5">
           
            {
                blogs.map( ( blog ) => 
                {
                
                    return <div key={ blog.id } className="col-12 col-md-6 p-5 base__alingCenterColum">
                        

                        <div className="card card-custom bg-white border-white border-0 blog__card base__pointer animate__animated animate__fadeIn" onClick={ ()=>{ handleSetActiveBlog( blog.id ); handleRedirectView(); } }>
                        
                            <div className="card-custom-img" style={{ backgroundImage : `url( ${ blog.url } )` }}></div>
                            

                            <div className="card-body" style={{ overflowY : "auto" }} >
                                <h5 className="card-title color__tertiaryText">{ blog.title }</h5>
                                <p className="card-subtitle mb-2 text-muted"><small>{ `${ blog.autor } - ${ blog.date }`}</small></p>
                            </div>
                            
                            <div className="card-footer" style={{ background : "inherit", borderColor : "inherit"  }} >
                                
                                {
                                    logged &&
                                    <div className="base__alingCenter">
                                        <button onClick={ () => { handleUpdateBlog( blog.id ) } } className="btn btn-primary blog__btn color__tertiaryBg">Actualizar</button>
                                        <button onClick={ () => { handleDeleteBlog( blog.id ) } } className="btn btn-primary blog__btn blog__marginBtn color__tertiaryBg">Borrar</button>
                                    </div>
                                }
                            
                            </div>
                            
                        </div>

                    </div>
                
                })
            }
                 
        </div>
    );
};


//////---------------------------------------------->>>>>


export default Blog;
