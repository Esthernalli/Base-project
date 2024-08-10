// src/components/UploadTable.js
import React, { useState } from 'react';
import './UploadTable.css';

const UploadTable = () => {
  const [files, setFiles] = useState([]);

  const handleFileChange = (e) => {
    const newFiles = Array.from(e.target.files);
    setFiles([...files, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <div className="upload-table-container">
      <h1>Upload Files</h1>
      <input 
        type="file" 
        multiple 
        onChange={handleFileChange} 
        className="file-input"
      />
      <table className="file-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>File Size</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {files.map((file, index) => (
            <tr key={index}>
              <td>{file.name}</td>
              <td>{(file.size / 1024).toFixed(2)} KB</td>
              <td>
                <button onClick={() => handleRemoveFile(index)} className="remove-button">
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UploadTable;
