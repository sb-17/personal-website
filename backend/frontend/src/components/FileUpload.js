import React, { useState, useRef } from 'react';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { reactLocalStorage } from 'reactjs-localstorage';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const FileUpload = (props) => {
  const [file, setFile] = useState(null); // state for storing actual image
  const [state, setState] = useState({
    projectTitle: '',
    version: ''
  });
  const [errorMsg, setErrorMsg] = useState('');
  const dropRef = useRef(); // React ref for managing the hover state of droppable area

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const onDrop = (files) => {
    const [uploadedFile] = files;
    setFile(uploadedFile);
  
    const fileReader = new FileReader();
    fileReader.readAsDataURL(uploadedFile);

    dropRef.current.style.border = '2px dashed #e9ebeb';
  };
  
  const updateBorder = (dragState) => {
    if (dragState === 'over') {
      dropRef.current.style.border = '2px solid #000';
    } else if (dragState === 'leave') {
      dropRef.current.style.border = '2px dashed #e9ebeb';
    }
  };  

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    try {
        const { projectTitle, version } = state;
        if (projectTitle.trim() !== '' && version.trim() !== '') {
          if (file) {
            const formData = new FormData();
            formData.append('file', file);
            formData.append('projectTitle', projectTitle);
            formData.append('version', version);
    
            await axios.post('/api/files/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': reactLocalStorage.get('token')
              }
            });

            setState({ projectTitle: "", version: "" });
            setFile(null)
          } else {
            setErrorMsg('Please select a file to add.');
          }
        } else {
          setErrorMsg('Please enter all the field values.');
        }
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
  };

  return (
    <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
                <form noValidate onSubmit={handleOnSubmit}>
                    <div className='form-group'>
                      <input
                          type='text'
                          placeholder='Project title'
                          name='projectTitle'
                          className='form-control'
                          value={state.projectTitle}
                          onChange={handleInputChange}
                      />
                    </div>

                    <div className='form-group'>
                      <input
                          type='text'
                          placeholder='Version'
                          name='version'
                          className='form-control'
                          value={state.version}
                          onChange={handleInputChange}
                      />
                    </div>
                    
                    <div className="upload-section">
                        <Dropzone onDrop={onDrop} onDragEnter={() => updateBorder('over')} onDragLeave={() => updateBorder('leave')} >
                            {({ getRootProps, getInputProps }) => (
                            <div {...getRootProps({ className: 'drop-zone' })} ref={dropRef}>
                                <input {...getInputProps()} />
                                <p>Drag and drop a file OR click here to select a file</p>
                                {file && (
                                <div>
                                    <strong>Selected file:</strong> {file.name}
                                </div>
                                )}
                            </div>
                            )}
                        </Dropzone>
                    </div>
                    <input
                    type="submit"
                    className="btn btn-outline-warning btn-block mt-4"
                    />
                </form>
            </div>
        </div>
    </div>
  );
};

export default FileUpload;