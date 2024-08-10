import React from 'react';
import './Upload.css'; // Ensure the path is correct

const Upload = () => {
    const handleUpload = () => {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = '.csv';
        fileInput.click();

        fileInput.addEventListener('change', (event) => {
            const file = event.target.files[0];
            console.log('File:', file);
        });
    };

    return (
        <div className="upload-container">
            <h1>Upload CSV</h1>
            <p>Drop your excel sheet here or browse</p>
            <button onClick={handleUpload}>Upload</button>
        </div>
    );
};

export default Upload;
