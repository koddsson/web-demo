import React from 'react';
export default class Shadow extends React.Component {

  attachShadow() {
    const {styles, template} = this.props
    return (host) => {
      if (host == null) return
      host.attachShadow({ mode: 'open' })
      host.shadowRoot.innerHTML = `<style>${styles || ''}</style>${template || ''}`
    }
  }

  render() {
    const {tag: Tag = 'div', styles, template, children, ...props} = this.props
    return (<Tag ref={this.attachShadow()} {...props}>{this.props.children}</Tag>)
  }

}
