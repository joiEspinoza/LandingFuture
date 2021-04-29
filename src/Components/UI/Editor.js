import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from 'react-draft-wysiwyg';


//////<<<<<------------------------------------------------``


const MyEditor = ( { setEditorState,editorState } ) => 
{


  const onEditorStateChange = (editorState) => 
  {
      setEditorState(editorState);
  };


  return (

    <div>

      <Editor 
        editorState={editorState}
        wrapperClassName="rich-editor demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
        placeholder="Escriba aquí" 
      />

    </div>

  );

};


//////---------------------------------------------->>>>>


export default MyEditor;