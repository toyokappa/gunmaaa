import React, { Component } from 'react';
import styled from 'styled-components';

import BaseLayout from '../templates/BaseLayout';
import { Submit } from '../atoms/Common';
import {
  NameInput,
  EmailInput,
  CategorySelect,
  ContentInput,
} from '../molecules/Contact';
import ContactImage from '../../images/contact.jpg';
// import postInquiry from '../../apis/awsApi';

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      category: '仕事の依頼',
      content: '',
      errors: {},
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;

    this.setState({ [name]: value });
  }

  handleValidation() {
    const { name, email, content } = this.state;
    const errors = {
      name: [],
      email: [],
      content: [],
    };
    let isValid = true;

    if (!name) {
      isValid = false;
      errors.name.push(['名前を入力してください']);
    }

    if (!email) {
      isValid = false;
      errors.email.push(['メールアドレスを入力してください']);
    }

    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (email && !emailRegexp.test(email)) {
      isValid = false;
      errors.email.push(['メールアドレスを正しく入力してください']);
    }

    if (!content) {
      isValid = false;
      errors.content.push(['内容を入力してください']);
    }

    this.setState({ errors });
    return isValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    // postInquiry(this.state);
    this.handleValidation();
  }

  render() {
    const { name, email, category, content, errors } = this.state;
    return (
      <BaseLayout>
        <ContactContainer>
          <TopImage src={ContactImage} />
          <ContactContent>
            <h1>Contact</h1>
            <form onSubmit={this.handleSubmit}>
              <NameInput
                name="name"
                value={name}
                errors={errors.name}
                onChange={this.handleInputChange}
              />
              <EmailInput
                name="email"
                value={email}
                errors={errors.email}
                onChange={this.handleInputChange}
              />
              <CategorySelect
                name="category"
                value={category}
                onChange={this.handleInputChange}
              />
              <ContentInput
                name="content"
                value={content}
                errors={errors.content}
                onChange={this.handleInputChange}
              />
              <Submit />
            </form>
          </ContactContent>
        </ContactContainer>
      </BaseLayout>
    );
  }
}

const ContactContainer = styled.div`
  width: 75%;
  box-sizing: border-box;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 8px;
  margin: 1.5rem auto;
`;

const TopImage = styled.div`
  display: block;
  width: 100%;
  height: 500px;
  background-image: url(${props => props.src});
  background-size: cover;
  background-position: center center;
  border-radius: 7px 7px 0 0;
`;

const ContactContent = styled.div`
  padding: 0 30px 30px;
`;
