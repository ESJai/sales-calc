import React, {Component} from 'react';
import { Button, Row, Col } from 'reactstrap';

import './Total.css'
class Total extends Component {
    

    render() {
        return(
            <div className='Cart'>
                <div className='TopBar'>
                    <Row style={{marginRight: "2%", marginBottom: "2%" }}>
                        <Col sm='3'>Item#</Col>
                        <Col sm='4'>Name</Col>
                        <Col sm='2'>Price</Col>
                        <Col sm='2'>Option</Col>
                    </Row>
                </div>
                <hr/>
               {this.props.itemList.map((item)=>{
                   return(
                       <div key={item.list_id} className='CartItem'>
                           <Row style={{marginRight: "1%", marginBottom: "2%" }}>
                                <Col sm='3' style={{marginBottom: "2%" }}>{item.id}</Col>
                                <Col sm='4'>{item.name}</Col>
                                <Col sm='2'> ${item.price}</Col>
                                <Col sm='2'><Button color="danger" size="sm" onClick={() => this.props.removeFromList(item)}><div className='remove'>Remove</div></Button></Col>
                           </Row>
                        </div>
                   )
               })}
               <br/>
                <hr/>
                <Row>
                    <Col>Total ${this.props.total}</Col>
                    <Col><Button color="warning" size="sm" onClick={() => this.props.clearList()}><div className='clear'>Clear</div></Button></Col>
                </Row>
            </div>
        )
    }
}

export default Total;