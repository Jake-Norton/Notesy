import React, {Component} from 'react';
import {CKEditor} from'@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import './Editor.css';

class Editor extends Component {
    render() {
        return (
            <div className='text-editor'>
                <CKEditor
                    editor={ClassicEditor}
                    data=''
                    onReady={editor => {
                        console.log('Editor ready', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({event, editor, data});
                    }}
                />
            </div>
        )
    }
}

export default Editor; 