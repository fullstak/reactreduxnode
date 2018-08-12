import { connect } from 'react-redux'
import Home from '../../components/home'
 
import { getUsersInfo } from '../../redux/actions'

const mapStateToProps = (state, ownProps) => {
    return {
        name: "test"
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(getUsersInfo())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)