import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import marked from 'marked';
import hljs from 'highlight.js';
import 'highlight.js/styles/androidstudio.css';

class Markdown extends Component {
  componentDidMount() {
    marked.setOptions({
      sanitize: true,
      langPrefix: 'hljs language-',
      highlight: (code, lang) => hljs.highlightAuto(code, [lang]).value,
    });
  }

  render() {
    const { body } = this.props;
    const html = marked(body);
    return <MarkdownBody dangerouslySetInnerHTML={{ __html: html }} />;
  }
}

Markdown.propTypes = {
  body: PropTypes.string.isRequired,
};

const MarkdownBody = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    line-height: 1.5;
    & > code {
      color: #00bfa5;
      background-color: #eee;
      padding: 0 4px;
      border-radius: 2px;
      margin: 0 2px;
    }
  }

  a {
    color: #009688;
  }

  li {
    line-height: 1.5;
    margin-bottom: 0.75rem;
  }

  img {
    max-width: 100%;
  }

  pre {
    line-height: 1.3;
  }
`;

export default Markdown;
