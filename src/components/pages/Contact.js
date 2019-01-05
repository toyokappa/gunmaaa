import React, { Component } from 'react';

import BaseLayout from '../templates/BaseLayout';
import { TextInput, Textarea, Select, Submit } from '../atoms/Common';
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
          <TextInput
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
          <TextInput
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <Select
            name="category"
            value={category}
            onChange={this.handleInputChange}
            options={['メンター依頼', '仕事の依頼', 'その他']}
          />
          <Textarea
            name="content"
            value={content}
            onChange={this.handleInputChange}
          />
          <Submit value="確認" />
        </form>
      </BaseLayout>
    );
  }
}
