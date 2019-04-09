import React, {Component} from 'react';
import service from '../service';
// import ReactCrop from 'react-image-crop';
// import 'react-image-crop/dist/ReactCrop.css';

class CreateSpot extends Component {

    state = {
        car: '',
        type: '',
        engine: '',
        horsepower: '',
        image: ''
        // crop: {
        //     aspect: 4/3
        //    },
        // imgSrc: null
    }

    // getCroppedImg = (image, pixelCrop, fileName) => {
 
    //     const canvas = document.createElement('canvas');
    //     canvas.width = pixelCrop.width;
    //     canvas.height = pixelCrop.height;
    //     const ctx = canvas.getContext('2d');
       
    //     ctx.drawImage(
    //       image,
    //       pixelCrop.x,
    //       pixelCrop.y,
    //       pixelCrop.width,
    //       pixelCrop.height,
    //       0,
    //       0,
    //       pixelCrop.width,
    //       pixelCrop.height
    //     );
       
    //     // As Base64 string
    //     // const base64Image = canvas.toDataURL('image/jpeg');
       
    //     // As a blob
    //     return new Promise((resolve, reject) => {
    //       canvas.toBlob(blob => {
    //         blob.name = fileName;
    //         resolve(blob);
    //       }, 'image/jpeg');
    //     });
    //   }

    handleChange = e => {
        let updateSpot = {};
        updateSpot[e.target.name] = e.target.value;
        this.setState(updateSpot);
    }
    // this.state.imgSrc
    handleImageUpload = e => {
        const uploadData = new FormData();
        uploadData.append("image", e.target.files[0]);
        
        service.handleUpload(uploadData)
            .then(response => {
            this.setState({ image: response.secure_url });
            })
            .catch(err => {
            console.log("Error while uploading the file: ", err);
            });
    }
    // this.setState({image: URL.createObjectURL(e.target.files[0]), imgSrc: e.target.files[0]})
    // handleImagePreview = e => {
    //     this.setState({image: e.target.files[0]})
    // }

    handleSubmit = e => {
        e.preventDefault();
        service.saveNewSpot(this.state, this.props.user._id)
        .then(response => {
            this.props.addedSpot(this.state);
            this.props.history.push('/all-spots');
        })
        .catch(err => {
            console.log("Error while creating the spot: ", err);
        });
    }

    // handleOnCropChange = (crop) => {
    //     this.setState({crop: crop})
    // }

    // handleOnCropComplete = (crop, pixelCrop) => {
    //     const imageFile = this.state.imgSrc;
    //     this.getCroppedImg(imageFile, pixelCrop, 'preview.jpg')
    //     .then((res) => {
    //         const blobUrl = URL.createObjectURL(res);
    //         console.log(blobUrl);
    //     })
        
    // }

    
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
                            {/* <div className="crop-div">
                                <ReactCrop 
                                    src={this.state.image} 
                                    crop={this.state.crop} 
                                    onChange={this.handleOnCropChange}
                                    onComplete={this.handleOnCropComplete} />
                                <button className="submit-btn" onClick={this.handleImageUpload}>Crop the image</button>
                            </div> */}
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default CreateSpot;