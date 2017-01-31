'use-strict';

import React from 'react';

class SmoothScroll extends React.Component {

  getTop(){

    const top = {
      box: document.getElementById(this.props.id).getBoundingClientRect().top,
      scroll: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop,
      client: document.documentElement.clientTop || document.body.clientTop || 0
    };

    return Math.round((top.box + top.scroll) - top.client);
  }

  scrollToTop(){

    const top = this.getTop();
    const speed = 15;

    let y = Math.floor(window.scrollY);

    if(y < top){

      const scrollWindow = setInterval(() => {
        y = y + speed;
        if(y >= top){
          return clearInterval(scrollWindow);
        }
        return window.scrollTo(0, y);
      }, 3);

    } else if(y > top){

      const scrollWindow = setInterval(() => {
        y = y - speed;
        if(y <= top){
          return clearInterval(scrollWindow);
        }
        return window.scrollTo(0, y);
      }, 3);

    }

  }

  render(){

    return (
      <span onClick={::this.scrollToTop}>{this.props.name}</span>
    );

  }

}

export default SmoothScroll;
