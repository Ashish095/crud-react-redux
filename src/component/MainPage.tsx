import * as React from 'react';

import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import AddUser from './user/AddUser';
import UserList from './user/UserList';
import { getUserFromFirebase } from '../actions/UserAction';
import { StoreState, User } from '../types';
import { connect } from 'react-redux';

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24,
        '@media (min-width: 960px)': {
            flexDirection: 'row'
        }
    },
    leftSection: {
        width: '100%',
        maxWidth: '100%',
        '@media (min-width: 600px)': {
            maxWidth: 'calc(100% - 60%)',
        },
        '& $heading': {
            fontSize: 28
        }
    },
    rightSection: {
        width: '100%',
        marginTop: 24,
        '@media (min-width: 960px)': {
            marginTop: 0,
        },
        '& $heading': {
            fontSize: 28
        }
    },
    formGroup: {
        display: 'flex',
        flexDirection: 'column',
        maxWidth: 280,
        width: '100%'
    },
    width100: {
        width: '100%'
    },
    marginTop12: {
        marginTop: 12
    },
    addUserButton: {
        marginTop: 20
    },
    tableSection: {
        overflow: 'auto',
        paddingBottom: 32
    },
    table: {
        margin: '0 16px',
        overflow: 'auto',
        minWidth: 900,
        '@media (min-width: 960px)': {
            margin: 0,
            minWidth: 'auto',
        }
    },
    heading: {}
});

interface Props {
    users: User[];
    getUsers: () => void;
}

interface State {
    activeUser: User | null;
}

type CombinedProps = Props & WithStyles<typeof styles>;

class MainPage extends React.Component<CombinedProps, State> {
    state: State = {
        activeUser: null
    }

    componentDidMount() {
        this.props.getUsers(); // api call 
    }

    render() {
        const { classes, users } = this.props;
        const { activeUser } = this.state;

        return (
            <Grid item={true} xs={12} className={classes.root}>
                {/* left Section */}
                <Grid item={true} xs={12} className={classes.leftSection}>
                    <AddUser
                        activeUser={activeUser}
                    />
                </Grid>
                {/* left Section */}

                {/* right Section */}
                <Grid item={true} xs={12} className={classes.rightSection}>
                    <UserList
                        users={users}
                        editUserDetail={this.editUserDetail}
                    />
                </Grid>
                {/* right Section */}
            </Grid>
        );
    }

    editUserDetail = (user: User, e: React.MouseEvent) => {
        e.preventDefault();
        console.log('activeUser', user);
        this.setState({
            activeUser: user
        });
    }
}

function mapStateToProps({ userState }: StoreState) {
    return {
        users: userState.user
    };
}

function mapDispatchToProps(dispatch: Function) {
    return {
        getUsers: () => { dispatch(getUserFromFirebase()); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(MainPage));