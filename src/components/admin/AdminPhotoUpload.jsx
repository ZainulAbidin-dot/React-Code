import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style-sheets/AdminPhotoUpload.css";

function PhotoUpload() {
  const [file, setFile] = useState("");

  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="PhotoUpload text-center">
      <input type="file" onChange={handleChange} />
      <img src={file} className="img-fluid restCover" />
    </div>
  );
}

export default PhotoUpload;
