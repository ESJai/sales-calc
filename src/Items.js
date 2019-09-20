import React, {Component} from 'react';
import ItemData from './items.json';

import './Items.css';
import Item from './Item';

class Items extends Component {
   

    render() {
        return(
        <div className='items'>
               {ItemData.map((item)=>{
                   return <Item item={item} key={item.id} addToList={this.props.addToList}/>
               })}
        </div>
        )
    }
}

export default Items;