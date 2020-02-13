import {
    connect
} from 'react-redux';

import MantraForm from '../components/MantraForm';
import { actionAddMantra } from '../actions';

// we don't need manStateToProps
// we aren't displaying anything from redux state

function mapDispatchToProps(dispatch) {
    return {
        handleSubmit: (newMantra) => {
            dispatch(actionAddMantra(newMantra))
        }
    }
}

// Fancy version
// const mapDispatchToProps = dispatch => ({
//     handleSubmit: (newMantra) => dispatch(actionAddMantra(newMantra))
// });

const reduxConnector = connect(null, mapDispatchToProps);
export default reduxConnector(MantraForm);