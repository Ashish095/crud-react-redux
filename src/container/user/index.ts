import { connect } from 'react-redux';

import { StoreState, User } from "../../types";
import { addUserOnFirebase } from '../../actions/UserAction';
import MainPage from '../../component/MainPage';

export function mapStateToProps({ userState }: StoreState) {
    return {
        userState
    };
}

export function mapDispatchToProps(dispatch: Function) {
    return {
        addUser: (user: User) => {
            dispatch(addUserOnFirebase(user));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);