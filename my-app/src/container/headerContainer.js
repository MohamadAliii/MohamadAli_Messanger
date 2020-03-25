import { connect } from 'react-redux'
import Header from '../components/messangar/header'

const mapStateToProps = (state) => ({
    name: state.name
})

const headerContainer = connect(mapStateToProps)(Header)

export default headerContainer