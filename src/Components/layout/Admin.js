import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startAddBlog } from '../../Actions/blogActions';
import { useForm } from '../../Hook/useForm';

import Editor from '../UI/Editor';
import { EditorState } from 'draft-js';
import { convertToHTML } from 'draft-convert';


//////<<<<<------------------------------------------------``


const Admin = () => 
{

    const [ editorState, setEditorState ] = useState( EditorState.createEmpty() );
    const html = convertToHTML( editorState.getCurrentContent() );
    
    const { name } = useSelector( state => state.auth );
    const dispatch = useDispatch();
    
    const f = new Date();
    const date = f.getDate() + "-" + (f.getMonth() +1) + "-" + f.getFullYear();
    
    const formInit = 
    { 
        title : "", 
        autor : name,
        url : "",
        textBody : "" ,
        date : date,
        
    };
    const [ formValues, handleInputChange ] = useForm( formInit );
    const { title } = formValues;
    

    const handleFileChange = ( event ) =>
    {
        const file = event.target.files[0];
        formValues.url = file; 
    };


    const handleAddNewBlog = ( event ) =>
    {
        event.preventDefault();
        formValues.textBody = html;

        dispatch( startAddBlog( formValues ) );
    };


///////////////////////////************************////////////////////////


    return (
        
        <div className="row UI__admin mt-5">
           
            <div className="col-md-12 base__alingCenterColum">
            
                <div className="admin__boxBlog p-5">

                    <form onSubmit={ handleAddNewBlog }>
                        
                        <div className="form-group">
                            <label><small>Titulo *</small></label>
                            <input className="form-control" name="title" value={ title } onChange={ handleInputChange }/>
                        </div>

                        <div className="form-group mt-5">
                            <label><small>Entrada *</small></label>
                            <Editor editorState={ editorState } setEditorState={ setEditorState }/>
                        </div>

                        <div className="form-group mt-5">
                            <label><small>Portada *</small></label>
                            <input type="file" className="form-control" name="url" onChange={ handleFileChange } />
                        </div>

                        <div className="form-group mt-5">
                            <button className="btn btn-primary form-control color__tertiaryBg">Cargar blog</button>
                        </div>
                    
                    </form>
                
                </div>
            
            </div>

        </div>
    );
};


//////---------------------------------------------->>>>>


export default Admin;
