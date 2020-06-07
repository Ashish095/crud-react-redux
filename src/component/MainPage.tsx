import * as React from 'react';

import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import AddUser from './user/AddUser';
import UserList from './user/UserList';

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

interface Props extends WithStyles<typeof styles> { }

interface State { }

class MainPage extends React.Component<Props, State> {
    render() {
        const { classes } = this.props;

        return (
            <Grid item={true} xs={12} className={classes.root}>
                {/* left Section */}
                <Grid item={true} xs={12} className={classes.leftSection}>
                    <AddUser />
                </Grid>
                {/* left Section */}

                {/* right Section */}
                <Grid item={true} xs={12} className={classes.rightSection}>
                    <UserList />
                </Grid>
                {/* right Section */}
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MainPage);