import React from 'react';

export default class Keypad extends React.Component{

  enteringPW = () => {
   console.log('Entering password...');
 }

  render(){
    return(
      <input onKeyUp={this.enteringPW} type="password" />
    )
  }
}
