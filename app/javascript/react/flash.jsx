import React from 'react';
import Shadow from './shadow.jsx'
import Octicon from './octicon.jsx'
import styles from '../../shadows/flash/index.css' assert {type: 'css'};
import template from '../../shadows/flash/index.html' assert {type: 'html'};

export default ({children, variant = "default", ...props} = {}) => {
  let icon, actions = [], realChildren = []
  for(const child of React.Children.toArray(children)) {
    if (child.type == Octicon) {
      icon = <Octicon {...child.props} slot="icon"/>
    } else if (child.type == 'button') {
      actions.push(<button {...child.props} slot="actions"/>)
    } else {
      realChildren.push(child)
    }
  }
  return (
    <Shadow styles={styles} template={template} primer-variant={variant} {...props}>
      {actions}
      {realChildren}
      {icon}
    </Shadow>
  );
}
