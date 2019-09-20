import React, {Component} from 'react';
import { Button, Row, Col } from 'reactstrap';

class Total extends Component {
    

    render() {
        return(
            <div>
                <Row>
                                <Col>Item#</Col>
                                <Col>Name</Col>
                                <Col>Price</Col>
                                <Col>Option</Col>
                </Row>
                <hr/>
               {this.props.itemList.map((item)=>{
                   return(
                       <div key={item.list_id} className='Cart'>
                           <Row style={{marginLeft: "1px", marginRight: "1px", marginBottom: "2px" }}>
                                <Col>{item.id}</Col>
                                <Col>{item.name}</Col>
                                <Col> ${item.price}</Col>
                                <Col><Button color="danger" size="sm" onClick={() => this.props.removeFromList(item)}>Remove</Button></Col>
                           </Row>
                        </div>
                   )
               })}
               <br/>
                <hr/>
                <Row>
                    <Col>Total ${this.props.total}</Col>
                    <Col><Button color="warning" size="sm" onClick={() => this.props.clearList()}>Clear</Button></Col>
                </Row>
            </div>
        )
    }
}

export default Total;