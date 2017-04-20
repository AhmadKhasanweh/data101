import React, { Component } from 'react';
import axios from 'axios';

class MySQL extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  loadDataFromServer() {
    axios.get('/api/installation')
      .then(res => {
        this.setState({ data: res.data });
    })
  }
 
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
    // let data = this.props.data.map( user => {

    // })
    return (
      <div className="row">
        <div className="col-md-3">
        </div>
        <div>
        </div>
        <div className="col-md-6">
          <div>
            <p> Hey from MySQL Component </p>
          </div>
        </div>
      </div>
    )
  }

}
export default MySQL;