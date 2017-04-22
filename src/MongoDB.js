import React, { Component } from 'react';

class MongoDB extends Component {

  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.submitData = this.submitData.bind(this);
    this.state = { 
      data: [],  
      installationIsAvailable: false
    };
  }

  loadData() {    
    return fetch("http://localhost:3100/api/installation", {
      method: 'GET'
    })
    .then( (response) => {
      return response.json() })   
      .then( (json) => {
        this.setState({data: json});
      })
      .catch(err => {
        console.log(err);
        return err;
      });
  }
 
  
  submitData(comment) {
    console.log(this.state.installationIsAvailable);
    if(this.state.installationIsAvailable){
      return; 
    }
    return fetch("http://localhost:3100/api/installation", {
      method: 'POST'
    })
    .then( res => {
      this.setState({installationIsAvailable: true}, () => {
        this.loadData();
      });
    })
    .catch( err => {
      console.log(err);
      return err;
    })
  }
  

  render () {
    let data = this.state.data;
    return (
      <div className="row">
        <div className="col-md-3">
        </div>
        <div>
        </div>
        <div className="col-md-6">
          <div>
            <p> Hey from MongoDB Component</p>
              {data.map(listValue => {
                return (
                  <ol key={listValue.objectId}>
                    <li>{listValue.objectId}</li>
                    <li>{listValue.name}</li>
                    <li>{listValue.deviceToken}</li>
                    <li>{listValue.installationId}</li>
                  </ol>
                )
              })}
            <button className="btn btn-success" onClick={this.loadData}>Show data</button>
            <button className="btn btn-success" onClick={this.submitData}>Post Data</button>
          </div>
        </div>
      </div>
    )
  }

}

export default MongoDB;