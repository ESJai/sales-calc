import React, {Component} from 'react';
import { Container, Row, Col } from 'reactstrap';

import Items from './Items';
import Total from './Total';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
          itemList: [],
          currentId: 0,
          total: 0
        };
    }
    SortList() {
      this.setState(prevState => {
        this.state.itemList.sort((a, b) => (a.id - b.id));
    });
  }

    addToList = (item) => {

      
      const temp = {
        list_id: this.state.currentId+1,
        id: item.id,
        name: item.name,
        price: item.price
      }

      var templist = this.state.itemList;
      templist.push(temp);

      this.SortList();
      
      this.setState({ 
        itemList: templist,
        currentId: this.state.currentId+1,
        total: this.state.total+item.price
      });
    }

    removeFromList = (item) => {
      const list = this.state.itemList.filter(temp => temp.list_id !== item.list_id);

      this.setState({ 
        itemList: list,
        total: this.state.total-item.price
      });
    }

    clearList = () => {
      this.setState({
        itemList: [],
        currentId: 0,
        total: 0
      });

    }

    render() {
        return (
            <div className="App">
            <Container>
              <Row>
                <Col xs="6">
                  <Items addToList={this.addToList}/>
                </Col>
                <Col xs="6">
                  <Total itemList={this.state.itemList} removeFromList={this.removeFromList} clearList={this.clearList} total={this.state.total.toFixed(2)}/>
                </Col>
              </Row>
            </Container>
              
              
            </div>
          );
    }
}

export default Main;