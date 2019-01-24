import React , { Component } from 'react'
import { Image_upload } from './function'

class Image extends Component {
    constructor() {
        super();
        this.state={
            img : ""
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ img : e.target.files[0]});
    }
   
    onSubmit(e) {
        e.preventDefault()

        const fd = new FormData();
        fd.append('img' , this.state.img , this.state.img.name);
        
        Image_upload(fd)

    }

    render() {
        return (
            <div className="upload_form">
                <form className="upload" onSubmit={this.onSubmit}>
                    <input className="image" 
                    type="file"
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