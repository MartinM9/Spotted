import React, {Component} from 'react';
import service from '../service'

class CreateSpot extends Component {

    state = {
        image: ''
    }

    handleImageUpload = e => {
        console.log("The file to be uploaded is: ", e.target.files[0]);
        const uploadData = new FormData();
        // image => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new thing in '/api/things/create' POST route
        uploadData.append("image", e.target.files[0]);
        
        service.handleUpload(uploadData)
            .then(response => {
            console.log('response is: ', response);
            // after the console.log we can see that response carries 'secure_url' which we can use to update the state 
            this.setState({ image: response.secure_url });
            })
            .catch(err => {
            console.log("Error while uploading the file: ", err);
            });
    }

    handleSubmit = e => {
        e.preventDefault();
        
        service.saveNewSpot(this.state)
        .then(res => {
            console.log('added: ', res);
            // here you would redirect to some other page 
        })
        .catch(err => {
            console.log("Error while adding the thing: ", err);
        });
    }

    render() {
        return(
            <>
                <section className="content">
                        <form onSubmit={this.handleSubmit}>
                            <input onChange={this.handleImageUpload} className="form-input" type="file"/>
                            <button className="submit-btn" type="submit">Upload</button>
                        </form>
                </section>
            </>
        )
    }
}

export default CreateSpot;