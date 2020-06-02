import * as React from 'react';
import classNames from 'classnames';

import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 24
    },
    leftSection: {
        width: '100%',
        maxWidth: 'calc(100% - 60%)',
        '& $heading': {
            fontSize: 28
        }
    },
    rightSection: {
        width: '100%',
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
    heading: {}
});

interface Props extends WithStyles<typeof styles> { }

interface State { }

class MainPage extends React.Component<Props, State> {
    render() {
        const { classes } = this.props;

        return (
            <Grid item={true} xs={12} className={classes.root}>
                <Grid item={true} xs={12} className={classes.leftSection}>
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
                </Grid>

                {/* right Section */}
                <Grid item={true} xs={12} className={classes.rightSection}>
                    <Typography className={classes.heading}>
                        View User
                    </Typography>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>User Name</TableCell>
                                <TableCell>Email Id</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>Ashish Sharma</TableCell>
                                <TableCell>ashish.iotasol</TableCell>
                                <TableCell>ashish.iotasol@gmail.com</TableCell>
                                <TableCell>
                                    <EditIcon color="primary" />&nbsp;
                                    <DeleteIcon color="primary" />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(MainPage);