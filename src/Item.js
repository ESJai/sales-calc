import React, {Component} from 'react';

import { Button, Row } from 'reactstrap';


import './Item.css';
class Item extends Component {


    render() {
        return(
                <Button size="lg" className="item" onClick={() => this.props.addToList(this.props.item)}>
                   <Row style={{marginTop: "2px", marginLeft: "2px", marginRight: "2px", marginBottom: "1px" }}>{this.props.item.id} {this.props.item.name}</Row>
                   <Row style={{marginLeft: "2px", marginRight: "2px", marginBottom: "2px" }}>${this.props.item.price}</Row>
               </Button>

               
        )
    }
}

export default Item;