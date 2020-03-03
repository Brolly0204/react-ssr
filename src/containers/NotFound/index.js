import React from 'react'

class NotFound extends React.Component {
  constructor(props) {
    super(props)
    if (props.staticContext) {
      props.staticContext.NOTFOUND = true
    }
  }

  render() {
    return (
      <div>
        404, not found
      </div>
    )
  }
}

export default NotFound
