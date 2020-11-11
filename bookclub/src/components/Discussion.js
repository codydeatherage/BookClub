import React, {Component} from 'react';
import PDFViewer from './PDFViewer';
import pdf from './../assets/The_Da_Vinci_Code.pdf';

class Discussion extends Component{
    render(){
        return(
            <div className="pdf-viewer">
                <PDFViewer pdf={pdf}/>
            </div>
        )
    }
}

export default Discussion;