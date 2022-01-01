import React, { useState, useEffect } from 'react';
import download from 'downloadjs';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

const FilesList = () => {
  const [filesList, setFilesList] = useState([]);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const getFilesList = async () => {
      try {
        const { data } = await axios.get('/api/files/getAllFiles');
        setErrorMsg('');
        setFilesList(data);
      } catch (error) {
        error.response && setErrorMsg(error.response.data);
      }
    };

    getFilesList();
  }, []);

  const downloadFile = async (id, path, mimetype) => {
    try {
      const result = await axios.get('/api/files/download/' + id, {
        responseType: 'blob'
      });
      const split = path.split('/');
      const filename = split[split.length - 1];
      setErrorMsg('');
      return download(result.data, filename, mimetype);
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setErrorMsg('Error while downloading file. Try again later');
      }
    }
  };

  return (
    <div>
      {errorMsg && <p className="errorMsg">{errorMsg}</p>}
      <Table hover variant="dark" responsive="sm">
      <thead>
          <tr>
            <th>Project title</th>
            <th>Version</th>
            <th>Download File</th>
          </tr>
        </thead>
        <tbody>
          {filesList.length > 0 ? (
            filesList.map(
              ({ _id, projectTitle, version, file_path, file_mimetype }) => (
                <tr key={_id}>
                  <td>{projectTitle}</td>
                  <td>{version}</td>
                  <td>
                    <a
                      href={""}
                      onClick={() =>
                        downloadFile(_id, file_path, file_mimetype)
                      }
                    >
                      Download
                    </a>
                  </td>
                </tr>
              )
            )
          ) : (
            <tr>
              <td colSpan={3} style={{ fontWeight: '300' }}>
                No files found. Please add some.
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  );
};

export default FilesList;