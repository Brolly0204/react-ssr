import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { actions } from './store'
import styles from './style.css'
import withStyle from '../../withStyle'

class Header extends React.Component {
  render() {
    const { login, handleLogin, handleLogout } = this.props
    return (
      <div className={styles.container}>
        <Link className={styles.item} to="/">
          Home
        </Link>
        {login ? (
          <Fragment key="key">
            <Link className={styles.item} to="/translation">
              翻译
            </Link>
            <div className={styles.item} type="button" onClick={handleLogout}>
              Logout
            </div>
          </Fragment>
        ) : (
          <div className={styles.item} type="button" onClick={handleLogin}>
            Login
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.header
})

const mapDispatchToProps = dispatch => ({
  handleLogin() {
    dispatch(actions.login())
  },
  handleLogout() {
    dispatch(actions.logout())
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Header, styles))
