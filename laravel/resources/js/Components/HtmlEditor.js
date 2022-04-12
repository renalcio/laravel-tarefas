import React, {useState, useRef} from 'react';
import JoditEditor from "jodit-react";

export default function HtmlEditor({value = '', name, handleChange, defaultConfig = {}}) {

    const editor = useRef(null)
    const [content, setContent] = useState(value)

    const config = {
        readonly: false,
        placeholder: 'Insira seu texto',
        ...defaultConfig
    }

    const handleUpdate = (newContent) => {
        setContent(newContent);
        handleChange(newContent);
    };

    return (
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            tabIndex={1} // tabIndex of textarea
            onBlur={newContent => handleUpdate(newContent)}
            onChange={(newContent) => {}}
        />
    );
}
