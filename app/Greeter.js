/**
 * [description]
 * @date        2017-09-28
 * @anotherdate 2017-09-28T16:16:03+080
 * @return      {[type]}                [description]
 */
import React, {Component} from 'react';
import config from './config.json';

class Greeter extends Component{
  render(){
    return(
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter
