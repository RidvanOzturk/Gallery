import React, { useState } from "react";

const UploadAndDisplayImage = () => {

  const [selectedImages, setSelectedImages] = useState([]);


  const buttonHandle = () => {
    setSelectedImages([]);
  }

  return (
    <div>
      <h1>Press the Button</h1>

      {
      selectedImages &&
        <div className="floating">
          {selectedImages.map(image=> ( <img alt="not found" width="250px" src={URL.createObjectURL(image)}/> ))}
          <br />
          <button onClick={buttonHandle}>Remove</button>
        </div>
      }

      <br />
      <br />
      
      <input
        type="file"
        name="myImage"
        onChange={(event) => {
          console.log(event.target.files[0]);
        
          setSelectedImages(current => [...current, event.target.files[0]]);
        }}
      />
    </div>
  );
};

export default UploadAndDisplayImage;