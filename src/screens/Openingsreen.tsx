import * as React from "react";

class Openingscreen extends React.Component {
  render() {
    return (
      <div >
        <div className="page-open-welcometxt">Welcome to the District 7 Boston Citizen’s App</div>
        <div className="page-open-subtxt"> Please confirm you are a resident of District 7 </div>
        <div><button className="btn-blue">I am a resident of D7</button></div>
        <div><button className="btn-white">Find out</button></div>
        
      </div>
    );
  }
}

export default Openingscreen;