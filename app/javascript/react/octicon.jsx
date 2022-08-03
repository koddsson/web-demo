import React from 'react';
import Shadow from './shadow.jsx'
import styles from '../../shadows/octicon/index.css' assert {type: 'css'};
import template from '../../shadows/octicon/index.html' assert {type: 'html'};

export default (props) => {
  return (
    <Shadow styles={styles} template={template} {...props} />
  );
}
