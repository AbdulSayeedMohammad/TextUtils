import React from "react";

export default function Alert(props) {
  const Capital=(word)=>{
      const st=word.toLowerCase();
      return st.charAt(0).toUpperCase() + st.slice(1);
  }
  return (
    <div style={{height:'25px'}}>
      {props.alert && <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{Capital(props.alert.type)}:</strong>
      <strong>   {props.alert.msg}</strong>
    </div>}
    </div>
  );
}
