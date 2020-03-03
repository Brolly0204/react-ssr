import React, { Component } from 'react'

export default (DecoratedComponent, styles) => {
  return class NewComponent extends Component {
    constructor(props) {
      super(props)
      if (styles._getCss) {
        props.staticContext.css.push(styles._getCss())
      }
    }

    render() {
      return <DecoratedComponent {...this.props} />
    }
  }
}
