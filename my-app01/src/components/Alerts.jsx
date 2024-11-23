import React from "react";

function Alerts(props) {

    function Capitalize(word){
        const lower  = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

  return (
      props.Alert && <div className={`alert alert-${props.Alert.type} alert-dismissible fade show`} role="alert">
        <strong>{Capitalize(props.Alert.type)}</strong>: {props.Alert.message}
      </div>
  );
}

export default Alerts;
