import * as React from 'react';
import classNames from 'classnames';

import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { User } from '../../types/model';
import { StoreState } from '../../types';
import { connect } from 'react-redux';
import { addUserOnFirebase } from '../../actions/UserAction';

const styles = (theme: Theme) => createStyles({
    root: {},
    heading: {
        fontSize: 28
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
});

type StyledProps = WithStyles<typeof styles>;

interface Props {
    // addUser: typeof addUser;
    addUser: (user: User) => void;
}

type CombinedProps = Props & StyledProps;

interface State {
    userState: User;
    saveClicked: boolean;
}

const INITIAL_STATE: State = {
    userState: {
        name: '',
        username: '',
        email: ''
    },
    saveClicked: false
}

class AddUser extends React.Component<CombinedProps, State> {
    constructor(props: CombinedProps) {
        super(props);
        this.state = INITIAL_STATE;
    }

    render() {
        const { classes } = this.props;
        const { userState, saveClicked } = this.state;
        const { name, username, email } = userState;

        return (
            <div>
                <Typography className={classes.heading}>
                    Add User
                </Typography>
                <Grid item={true} xs={12} className={classes.formGroup}>
                    <FormControl
                        className={classNames(
                            classes.width100,
                            classes.marginTop12
                        )}
                    >
                        <TextField
                            label="Name"
                            id="name"
                            name="name"
                            type="text"
                            value={name}
                            onChange={this.handleChange}
                            error={saveClicked && !name}
                        // onChange={(e) => this.setState({ caseNumber: e.target.value })}
                        />
                    </FormControl>
                    <FormControl
                        className={classNames(
                            classes.width100,
                            classes.marginTop12
                        )}
                    >
                        <TextField
                            label="User Name"
                            id="user-name"
                            name="username"
                            type="text"
                            value={username}
                            onChange={this.handleChange}
                            error={saveClicked && !username}
                        // onChange={(e) => this.setState({ caseNumber: e.target.value })}
                        />
                    </FormControl>
                    <FormControl
                        className={classNames(
                            classes.width100,
                            classes.marginTop12
                        )}
                    >
                        <TextField
                            label="Email Id"
                            id="email-id"
                            name="email"
                            type="text"
                            onChange={this.handleChange}
                            value={email}
                            error={saveClicked && !email}
                        // onChange={(e) => this.setState({ caseNumber: e.target.value })}
                        />
                    </FormControl>
                </Grid>
                <Grid item={true} xs={12} className={classes.addUserButton}>
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                        onClick={() => this.handleSaveUser()}
                    >
                        Add User
                    </Button>
                </Grid>
            </div>
        );
    }

    handleSaveUser = () => {
        const { addUser } = this.props;
        const { userState } = this.state;
        this.setState({ saveClicked: true });
        if (!userState.name || !userState.username || !userState.email) {
            return;
        }
        addUser(userState);
    }

    handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement>) => {
        const { userState } = this.state;
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            userState: { ...userState, [name]: value }
        });
    }
}

function mapStateToProps({ }: StoreState) {
    return {};
}

function mapDispatchToProps(dispatch: Function) {
    return {
        addUser: (user: User) => { dispatch(addUserOnFirebase(user)); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AddUser));