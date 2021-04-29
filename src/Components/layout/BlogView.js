import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { editOff, startUpdateBlog } from '../../Actions/blogActions';
import { useForm } from '../../Hook/useForm';

import Editor from '../UI/Editor';
import { ContentState, EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';
import htmlToText from 'html-to-text';


//////<<<<<------------------------------------------------``


const BlogView = () => 
{

    const dispatch = useDispatch();
    const { activeBlog, edit } = useSelector( state => state.blogs );
    const descriptionHTML = htmlToText.fromString( activeBlog.textBody, { wordwrap : 130 } );
    const [ editorState, setEditorState ] = useState( EditorState.createWithContent( ContentState.createFromText( descriptionHTML ) ) );
    const html = convertToHTML( editorState.getCurrentContent() );

    const initFormValues = 
    { 
        id : activeBlog.id,
        title : activeBlog.title, 
        url : activeBlog.url,
        url2 : "",
        textBody : "",
        
    };
    const [ formValues, handleInputChange ] = useForm( initFormValues );
    const { title, url } = formValues


    const handleFileChange = ( event ) =>
    {
        const file = event.target.files[0];
        formValues.url2 = file; 
    };


    const handleUpdate = ( event ) =>
    {
        event.preventDefault();

        formValues.textBody = html;

        if( formValues.url2 === "" )
        {
            delete formValues.url2;
            formValues.url = "";
        }
        else
        {
            formValues.url = formValues.url2;
            delete formValues.url2;
        };

        if( formValues.url === undefined )
        {
            formValues.url = "";
        };

        
        dispatch( startUpdateBlog( formValues ) );

    };


    const history = useHistory();
    const handleCancelEdit = ( event ) =>
    {
        event.preventDefault();
        dispatch( editOff() );
        history.push( "/blog" )
    }


///////////////////////////************************////////////////////////


    return (
        
        <div className="row p-5">
           
            <div className="col-md-12 p-5 base__alingCenterColum">
                
                <div className="blog__coverImg" style={{ backgroundImage : `url( ${ url } )` }}>
                    <h2 className="blog__title">{ title }</h2>
                </div>
                
                <div className="form-group mt-3">
                    <textarea rows="4" cols="50" className="blog__textArea" placeholder="textBody" name="textBody" disabled  value={ descriptionHTML } onChange={ handleInputChange } style={{ height : "auto" }}></textarea>
                </div>

                
                { 
                
                    edit &&
                    <>
                    
                    <div className="blog__boxUpdate">
                        
                        <form>

                            <div className="form-group mt-3">
                                
                                <label><small>Titulo *</small></label>
                                <input className="form-control" name="title" value={ title } onChange={ handleInputChange }/>
                            
                            </div>

                            <div className="form-group mt-5">
                                
                                <label><small>Entrada *</small></label>
                                <Editor editorState={ editorState } setEditorState={ setEditorState }/>
                            
                            </div>
                            
                            <div className="form-group mt-5">
                            
                                <label><small>Nueva portada</small></label>
                                <input type="file" className="form-control" name="url" onChange={ handleFileChange } />
                            
                            </div>

                            <div className="form-group mt-5">
                            
                                <center>
                                    <button onClick={ handleUpdate } className="btn btn-primary blog__btn color__tertiaryBg">Actualizar</button>
                                    <button onClick={ handleCancelEdit } className="btn btn-primary blog__btn color__tertiaryBg blog__marginBtn">Cancelar</button>
                                </center>
                            
                            </div>

                        </form>
                    
                    </div>
                    
                    </>
                
                }
                
            </div>
        
        </div>

    );
};


//////---------------------------------------------->>>>>


export default BlogView;
