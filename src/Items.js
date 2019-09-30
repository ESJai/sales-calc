import React, {Component} from 'react';
import ItemData from './items.json';

import './Items.css';
import Item from './Item';

class Items extends Component {
   

    render() {
        return(
        <div className='items'>
            <div className="DVD">
                DVD
                <hr/>
                {ItemData.map((item, index)=>{
                    if(item.catagory==="DVD")
                        return <Item item={item} key={item.id} addToList={this.props.addToList}/>
                })}
                <hr/>
                <br/>
            </div>
            <div className="Books">
                Books
                <hr/>
                {ItemData.map((item, index)=>{
                    if(item.catagory==="Book")
                        return <Item item={item} key={item.id} addToList={this.props.addToList}/>
                })}
                <hr/>
                <br/>
            </div>
            <div className="Playroom">
                Playroom Materials
                <hr/>
                {ItemData.map((item, index)=>{
                    if(item.catagory==="Playroom Material")
                        return <Item item={item} key={item.id} addToList={this.props.addToList}/>
                })}
                <hr/>
                <br/>
            </div>
            <div className="Merchandise">
                Merchandise
                <hr/>
                {ItemData.map((item, index)=>{
                    if(item.catagory==="Merchandise")
                        return <Item item={item} key={item.id} addToList={this.props.addToList}/>
                })}
                <hr/>
            </div>

            
               
        </div>
        )
    }
}

export default Items;