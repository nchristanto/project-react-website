import React from 'react';
import cover from "./images/trainspeed.jpg"

const style = {
  coverImage: {
    backgroundImage: `url(${cover})`,
    justifyContent: "left",
    width: "auto",
    height: "500px",
    paddingLeft: "20px",
    paddingRight: "300px",
    paddingTop: "50px",
  }

}

const Cover = (props) => {
  return (
    <div style={style.coverImage}>
    </div>
  );
};

export default Cover;