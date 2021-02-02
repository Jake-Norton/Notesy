import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import './Editor.css';

class Editor extends Component {
    render() {
        return (
            <section className='mandatoryParent'>
                <div className='toolbar'>
                     <a href='javascript:void(0)' onClick="format('bold')"><span className=''/></a>
                </div>
                <div className='textbox' contentEditable='true'/>
            </section>
        )
    }
}

export default Editor