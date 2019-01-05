import React, { Component } from 'react';

import BaseLayout from '../templates/BaseLayout';
// import postInquiry from '../../apis/awsApi';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      category: '仕事の依頼',
      content: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    // postInquiry(this.state);
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    const { name, email, category, content } = this.state;
    return (
      <BaseLayout>
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <select
            name="category"
            value={category}
            onChange={this.handleInputChange}
          >
            <option value="メンター依頼">メンター依頼</option>
            <option value="仕事の依頼">仕事の依頼</option>
            <option value="その他">その他</option>
          </select>
          <textarea
            name="content"
            value={content}
            onChange={this.handleInputChange}
          />
          <input type="submit" value="確認" />
        </form>
      </BaseLayout>
    );
  }
}
