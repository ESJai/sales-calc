import React, {Component} from 'react';

import { Button, Row, Col} from 'reactstrap';


import './Item.css';
class Item extends Component {
    

    render() {
        var color = "primary";
        if(this.props.item.catagory==="Book")
            color = "warning";
        else if(this.props.item.catagory==="Playroom Material")
            color = "success";
        else if(this.props.item.catagory==="Merchandise")
            color = "secondary";

        return(
                <Button size="sm" color={color} className="item" onClick={() => this.props.addToList(this.props.item)}>
                    <Row>
                        <Col>
                            <div className="col1">
                                {this.props.item.id}
                            </div>
                        </Col>
                    </Row>
                   <Row>
                        <Col>
                            <div className="col2">
                                {this.props.item.name}
                            </div>
                        </Col>
                </Row>
                   <Row>
                       <Col>
                            <div className="col3">
                                ${this.props.item.price}
                            </div>
                       </Col>
                    </Row>
               </Button>
        )
    }
}

export default Item;