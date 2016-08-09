/**
 * editor
 * @author jizha.wyj (oldj)
 * @blog http://oldj.net
 */

'use strict';

import React from 'react';
import CodeMirror from 'codemirror';
import modeHost from './cm_hl';
import '../../../node_modules/codemirror/lib/codemirror.css';
import './editor.less'

export default class Editor extends React.Component {

    constructor(props) {
        super(props);

        this.codemirror = null;
        modeHost({});
    }

    componentDidMount() {
        // console.log(this.cnt_node, this.cnt_node.value);
        this.codemirror = CodeMirror.fromTextArea(this.cnt_node, {
            lineNumbers: true,
            // readOnly: true,
            mode: 'host'
        });

        this.codemirror.setSize('100%', '100%');
    }

    componentWillReceiveProps(next_props) {
        // console.log(next_props);
        this.codemirror.getDoc().setValue(next_props.code);
    }

    onChange() {
    }

    render() {
        return (
            <div id="sh-editor">
                <textarea
                    ref={(c) => this.cnt_node = c}
                    value={this.props.code || ''}
                    onChange={this.onChange.bind(this)}
                />
            </div>
        );
    }
}