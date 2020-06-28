import * as React from 'react';

import { WithStyles, createStyles, Theme, withStyles } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { User } from '../../types/model';

const styles = (theme: Theme) => createStyles({
    root: {},
    heading: {
        fontSize: 28
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

interface Props extends WithStyles<typeof styles> {
    users: User[];
    editUserDetail: (user: User, e: React.MouseEvent) => void;
}

interface State { }

class UserList extends React.Component<Props, State> {

    deleteUser = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log('Delete User Function');
    }

    render() {
        const { classes, users, editUserDetail } = this.props;

        return (
            <div>
                <Typography className={classes.heading}>
                    View User
                </Typography>

                <Grid item={true} xs={12} className={classes.tableSection}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>User Name</TableCell>
                                <TableCell>Email Id</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((user, i) => {
                                return <TableRow key={`id_${i}`}> 
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.username}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell>
                                        <IconButton
                                            onClick={(e) => editUserDetail(user, e)}
                                        >
                                            <EditIcon
                                                color="primary"
                                            />&nbsp;
                                        </IconButton>
                                        <IconButton
                                            onClick={(e) => this.deleteUser(e)}
                                        >
                                            <DeleteIcon color="primary" />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            })}
                        </TableBody>
                    </Table>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(UserList);