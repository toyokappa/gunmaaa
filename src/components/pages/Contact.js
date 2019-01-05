import React, { Component } from 'react';

import BaseLayout from '../templates/BaseLayout';
import { Submit } from '../atoms/Common';
import {
  NameInput,
  EmailInput,
  CategorySelect,
  ContentInput,
} from '../molecules/Contact';
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
    event.preventDefault();
    // postInquiry(this.state);
    console.log(this.state);
  }

  render() {
    const { name, email, category, content } = this.state;
    return (
      <BaseLayout>
        <h1>Contact</h1>
        <form onSubmit={this.handleSubmit}>
          <NameInput
            name="name"
            value={name}
            onChange={this.handleInputChange}
          />
          <EmailInput
            name="email"
            value={email}
            onChange={this.handleInputChange}
          />
          <CategorySelect
            name="category"
            value={category}
            onChange={this.handleInputChange}
            options={['メンター依頼', '仕事の依頼', 'その他']}
          />
          <ContentInput
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
