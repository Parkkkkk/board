import React , { Component } from 'react'
import { Image_upload } from './function'

class Image extends Component {
    constructor() {
        super();
        this.state={
            img : ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        this.setState({  [e.target.name] : e.target.value })
    }
    
    onSubmit (e) {
        e.preventDefault()

        var image = {
            img : this.state.img
        }

        Image_upload(image)
        .then(res => console.log(res))

    };

    render() {
        return (
            <div className="upload_form">
                <form className="upload" onSubmit={this.onSubmit}>
                    <input className="image" 
                    type="file"
                    value={this.state.img}
                    name="img"
                    onChange={this.onChange}
                    accept="image/*">
                    </input>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}

export default Image