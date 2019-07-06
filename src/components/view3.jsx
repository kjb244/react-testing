import React, { Component } from 'react';
import '../css/view3.css';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class View3 extends Component{
  state = {
    todoText: '',
    todoItems: []
  };

  todoTextChange = (e) =>{
    this.setState({todoText: e.target.value });
  };

  addItem = () => {
    if (!this.state.todoText.length) return false;
    const item = this.state.todoText;
    this.setState({todoItems: [...this.state.todoItems, item], todoText: '' });
  };

  deleteItem = (i) => {
    const newArr = [...this.state.todoItems];
    newArr.splice(i,1);
    this.setState({todoItems: newArr, todoText: ''});
  };




  render(){
    const topStyle={
      marginTop: '20px'
    };


    return(
      <div className="page">
        <div style={topStyle} className="row">
          <div className="small-12 columns medium-8 medium-centered">
            <h3>View 3</h3>
            <div style={{display: 'flex'}} className="flex-container">
              <input type="text" placeholder="todo item" value={this.state.todoText} onChange={this.todoTextChange}/>
              <button style={{marginLeft: '8px'}} className="button" disabled={!this.state.todoText.length} onClick={this.addItem}>Add</button>
            </div>
            <div className="items">
              <TransitionGroup className="item-transition-master">
              {this.state.todoItems.map((e,i) =>
                  <CSSTransition key={i} classNames="move" timeout={300}>
                  <div key={i} className="item row">
                    <div style={{display: 'flex', justifyContent: 'space-between'}} className="small-12 medium-11 medium-centered columns">
                      <div>{e}</div>
                      <button className="button alert small" onClick={(e) => this.deleteItem(i)}>Delete</button>
                    </div>
                  </div>
                </CSSTransition>
              )}
              </TransitionGroup>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default View3;
