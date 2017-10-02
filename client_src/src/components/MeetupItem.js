import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class MeetupItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      <li className="collection-item">
        <Link to={`/meetups/${this.state.item.id}`}>{this.state.item.name}</Link>
      </li>
    )
  }
}

export default MeetupItem;