import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { actions } from './store'
import styles from './style.css'
import withStyle from '../../withStyle'

class Translation extends Component {
  componentDidMount() {
    const { getTranslationList } = this.props
    getTranslationList()
  }

  getList() {
    const { translationList } = this.props
    return translationList.map(item => (
      <p className={styles.item} key={item.id}>
        {item.title}
      </p>
    ))
  }

  render() {
    return this.props.isLogin ? (
      <div>
        <Helmet>
          <title>Lee的翻译列表</title>
          <meta name="description" content="React ssr Lee的翻译列表" />
        </Helmet>
        {this.getList()}
      </div>
    ) : (
      <Redirect to="/" />
    )
  }
}

const mapStateToProps = state => ({
  ...state.translation,
  isLogin: state.header.login
})

const mapDispatchToProps = {
  getTranslationList: actions.getTranslationList
}

// Translation.loadData = store => {
//   return store.dispatch(actions.getTranslationList())
// }

const WrapTranslation = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Translation, styles))

WrapTranslation.loadData = store => {
  return store.dispatch(actions.getTranslationList())
}

export default WrapTranslation
