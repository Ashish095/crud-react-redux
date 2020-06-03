import * as React from 'react';
import classNames from 'classnames';

import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

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

interface Props extends WithStyles<typeof styles> { }

interface State { }

class AddUser extends React.Component<Props, State> {
    render() {
        const { classes } = this.props;

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
                        // value={caseNumber}
                        // error={saveClicked && !caseNumber}
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
                            name="userName"
                            type="text"
                        // value={caseNumber}
                        // error={saveClicked && !caseNumber}
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
                            name="emailId"
                            type="text"
                        // value={caseNumber}
                        // error={saveClicked && !caseNumber}
                        // onChange={(e) => this.setState({ caseNumber: e.target.value })}
                        />
                    </FormControl>
                </Grid>
                <Grid item={true} xs={12} className={classes.addUserButton}>
                    <Button
                        variant="contained"
                        size="medium"
                        color="primary"
                    // onClick={() => this.saveCaseNumber()}
                    >
                        Add User
                    </Button>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(AddUser);