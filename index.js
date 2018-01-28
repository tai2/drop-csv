import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone'
import Papa from 'papaparse'

class CsvApp extends Component {
    constructor(props) {
        super(props)
        this.handleDrop = this.handleDrop.bind(this)
        this.state = {
            rows: [],
        }
    }
    handleDrop(files) {
        for (const file of files) {
            Papa.parse(file, {
                complete: (results) => {
                    console.log("Finished:", results.data)
                    this.setState({ rows: results.data })
                }
            })
        }
    }
    render() {
        return (
            <div>
                <Dropzone onDrop={this.handleDrop}>Drop CSV here.</Dropzone>
                <p>{this.state.rows}</p>
            </div>
        )
    }
}

ReactDOM.render(
    <CsvApp/>,
    document.getElementById('app')
)
