import React from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from 'react-draft-wysiwyg';


//////<<<<<------------------------------------------------``


const MyEditor = ( { setEditorState,editorState, wrapperClass = "", editorClass = "", toolbarClass = ""  } ) => 
{


  const onEditorStateChange = ( editorState ) => 
  {
      setEditorState( editorState );
  };


  return (

    <div>

      <Editor 
        editorState={ editorState }
        wrapperClassName={ wrapperClass }
        editorClassName={ editorClass }
        onEditorStateChange={onEditorStateChange}
        toolbarClassName={ toolbarClass }
        placeholder="Escriba aquí" 
      />

    </div>

  );

};


//////---------------------------------------------->>>>>


export default MyEditor;