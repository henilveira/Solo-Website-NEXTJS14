'use client'
import React, { useState, ChangeEvent } from 'react';
import axios from 'axios';

const UploadProfilePicture: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      const formData = new FormData();
      formData.append('profile_picture', file);

      const response = await axios.post(
        'http://127.0.0.1:8000/api/accounts/upload-profile-picture/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          withCredentials: true,
        }
      );
      console.log(response)

      if (response.status === 200) {
        setImageUrl(response.data.profile_picture_url);
      }
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {imageUrl && <img src={imageUrl} alt="Profile" />}
    </div>
  );
};

export default UploadProfilePicture;
