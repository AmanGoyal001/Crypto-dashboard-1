import React from "react";
import "./styles.css";


function Button({text, onClick}) {    /*These are the responses we will take as input*/
  return (
    <div className="btn" onClick={()=>onClick()}>{text}
    </div>
  )
};

export default Button;