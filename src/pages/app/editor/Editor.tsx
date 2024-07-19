import React, { useRef, useState } from 'react';
import JoditEditor from 'jodit-react';


const Editor: React.FC = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('Escreva aqui...');

  const config = {
    readonly: false, // All options from https://xdsoft.net/jodit/doc/
    height: 500,
    uploader: {
      insertImageAsBase64URI: true, // Insert image as base64
    },
  };

  return (
    <div className="App">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => {}}
      />
     
    </div>
  );
};

export default Editor;
