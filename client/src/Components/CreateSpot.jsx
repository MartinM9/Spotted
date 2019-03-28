import React, {Component} from 'react';
import service from '../service'

class CreateSpot extends Component {

    state = {
        car: '',
        type: '',
        engine: '',
        horsepower: '',
        image: ''
    }

    handleChange = e => {
        let updateSpot = {};
        updateSpot[e.target.name] = e.target.value;
        this.setState(updateSpot);
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
        
        service.saveNewSpot(this.state, this.props.user._id)
        .then(response => {
            console.log('added: ', response);
            // here you would redirect to some other page 
            this.props.addedSpot(this.state);
            this.props.history.push('/all-spots');
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
                            <input required onChange={this.handleChange} value={this.state.car} name="car" type="text" placeholder="Car: Lamborghini, Ferrari..." />
                            <input required onChange={this.handleChange} value={this.state.type} name="type" type="text" placeholder="Type: Huracán, 458..." />
                            <input required onChange={this.handleChange} value={this.state.engine} name="engine" type="text" placeholder="Engine" />
                            <input required onChange={this.handleChange} value={this.state.horsepower} name="horsepower" type="text" placeholder="Horsepower" />
                            <input required onChange={this.handleImageUpload} className="form-input" type="file"/>
                            <button className="submit-btn" type="submit">Upload</button>
                        </form>
                </section>
            </>
        )
    }
}

export default CreateSpot;