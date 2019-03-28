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
                    <div className="create-spot-container">
                        <div className="form-container-create-spot">
                            <form onSubmit={this.handleSubmit}>
                                <input required onChange={this.handleChange} className="form-input" value={this.state.car} name="car" type="text" placeholder="Car: Lamborghini, Ferrari..." />
                                <input required onChange={this.handleChange} className="form-input" value={this.state.type} name="type" type="text" placeholder="Type: Huracán, 458..." />
                                <input required onChange={this.handleChange} className="form-input" value={this.state.engine} name="engine" type="text" placeholder="Engine: 5.0 V8" />
                                <input required onChange={this.handleChange} className="form-input" value={this.state.horsepower} name="horsepower" type="text" placeholder="Horsepower: 640" />
                                <input required onChange={this.handleImageUpload} className="form-input-file" type="file" />
                                <button className="submit-btn" type="submit">Upload</button>
                            </form>
                        </div>
                        <div className="rules-div">
                            <h2>Rules for uploading</h2>
                            <ul>
                                <li>The spot has to be spot-worthy. This means it has to be an exclusive car that you see less often on the road than a common Volkswagen Golf or Ford Focus.</li>
                                <li>Every spotter can spot every car only once.</li>
                                <li>The pictures must be of decent quality. Every image will be cropped to 1024px width and 768px height.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default CreateSpot;