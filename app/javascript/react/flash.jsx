import React from 'react';
import Shadow from './shadow.jsx'
import styles from '../../shadows/flash/index.css' assert {type: 'css'};
import template from '../../shadows/flash/index.html' assert {type: 'html'};

export default ({children, variant = "default"} = {}) => {
  return (
    <Shadow styles={styles} template={template} primer-variant={variant}>
      {children}
    </Shadow>
  );
}
