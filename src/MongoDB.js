import React, { Component } from 'react';
import axios from 'axios';

class MongoDB extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { data: [] };
  //   this.loadDataFromServer = this.loadDataFromServer.bind(this);
  // }

  // loadDataFromServer() {
  //   axios.get('http://localhost:300/api/installation')
  //     .then(res => {
  //       console.log(res);
  //       this.setState({ data: res.data });
  //   })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }
 
  /*
  handleCommentSubmit(comment) {
    let comments = this.state.data;
    comment.id = Date.now();
    let newComments = comments.concat([comment]);
    this.setState({ data: newComments });
    axios.post(this.props.url, comment)
    .catch(err => {
      console.error(err);
      this.setState({ data: comments });
    });
  }
  */

  render () {
    let data = this.state.data;
    console.log(data)
    return (
      <div className="row">
        <div className="col-md-3">
        </div>
        <div>
        </div>
        <div className="col-md-6">
          <div>
            <p> Hey from MongoDB Component {data}</p>
          </div>
        </div>
      </div>
    )
  }

}
export default MongoDB;