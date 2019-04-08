import axios from 'axios';

const service = axios.create({
  baseURL: `${process.env.REACT_APP_baserUrl}`
});

const errorHandler = err => {
  throw err;
};

export default {
  service,

  handleUpload (theFile) {debugger
    return service.post('/upload', theFile)
      .then(res => res.data)
      .catch(errorHandler);
  },

  saveNewSpot (newSpot, id) {
    return service.post(`/create-spot/${id}`, newSpot)
      .then(res => res.data)
      .catch(errorHandler);
  }
}