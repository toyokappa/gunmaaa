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
  img {
    max-width: 100%;
  }
`;

export default Markdown;
