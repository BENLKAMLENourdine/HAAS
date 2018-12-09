import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router'

import { createHash } from '../store/actions';

class CreateHash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      iteration: 1,
      algorithm: 'md5'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleChangeSelect(e) {
    this.setState({ algorithm: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createHash(this.state);
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
      <div className="center">
      <h2 className="heading">Hash As A Service</h2>
      <p className="small-heading">Hash anything in a second! Let's play</p>
      </div>
        <label className="form-label" htmlFor="data">
          Text to hash *
        </label>
        <input
          className="form-input"
          placeholder="I like barbecue"
          type="text"
          name="data"
          value={this.state.data}
          onChange={this.handleChange}
        />
        <div>
        <label>
          Choose a method</label>
          <div>
          <select className="form-input" value={this.state.algorithm} onChange={this.handleChangeSelect}>
            <option value="md5">MD5</option>
            <option value="sha1">SHA1</option>
            <option value="sha256">SHA256</option>
          </select>
          </div>
        </div>
        <label className="form-label" htmlFor="iteration">
          Number of iteration
        </label>
        <input
          className="form-input"
          placeholder="1435"
          type="text"
          name="iteration"
          value={this.state.iteration}
          onChange={this.handleChange}
        />
          <div className="center">
          <button className="button" type="submit">
            Confirm
          </button>
          </div>
      </form>
    );
  }
}

export default connect(() => ({}), { createHash })(CreateHash);