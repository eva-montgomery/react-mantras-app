
import {
    connect
} from 'react-redux';

import MantraList from '../components/MantraList';

// We don't need mapDispatchToProps 
// This component does not change redux state

function mapStateToProps(state) {
    return {
        mantras: state
    }
}

const reduxConnector = connect(mapStateToProps);
export default reduxConnector(MantraList);