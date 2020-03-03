import React from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { getHomeList } from './store/actions'
import styles from './style.css'
import withStyle from '../../withStyle'

class Home extends React.Component {
  componentDidMount() {
    if (!this.props.newList.length) {
      this.props.getHomeList()
    }
  }

  getList() {
    const { newList } = this.props

    return newList.map(item => <li key={item.id}>{item.title}</li>)
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Lee的首页</title>
          <meta name="description" content="React ssr 首页" />
        </Helmet>
        <ul className={styles.list}>{this.getList()}</ul>
        <button type="button" onClick={() => alert('click!')}>
          Click here
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  ...state.home
})

const mapDispatchToProps = {
  getHomeList
}

// node服务端执行
// Home.loadData = store => {
//   return store.dispatch(getHomeList())
// }
const ExportHome = connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyle(Home, styles))

ExportHome.loadData = store => {
  return store.dispatch(getHomeList())
}

export default ExportHome
