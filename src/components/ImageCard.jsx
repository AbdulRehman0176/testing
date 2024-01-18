import React from "react";
const ImageCard = (props) => {
    
  return (
    <div className="card container ">
      <div style={{ display: "flex", color:"black" }}>
        <div className="col-4" style={{ width: "33%" }}>
          <img
            style={{ width: "100%", height: "100%", padding: "5%" }}
            src={props.image}
          ></img>
        </div>
        <div
          className="col-2"
          style={{ width: "33%", marginLeft: "10px", marginTop: "60px" }}
        >
          <h5>{props.label}</h5>
        </div>
        <div className="col-4" style={{ width: "33%", marginTop: "60px" }}>
          <p>{props.description}</p>
        </div>
          <p>{props.color}</p>
        
      </div>
    </div>
  );
};
export default ImageCard;