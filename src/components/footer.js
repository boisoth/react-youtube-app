import React, { Component } from 'react';

class Footer extends Component {

  constructor(props){
    super(props);

    let newTerm = props.footerProp;
  }

  render(){
    return(
      <div className="footer">
        <p>Footer</p>
      </div>
    )
  }
}

export default Footer;



