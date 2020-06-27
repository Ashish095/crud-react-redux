import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import createStyles from '@material-ui/core/styles/createStyles';

const styles = (theme: Theme) => createStyles({
    root: {},
    marginTop20: {
        marginTop: 20
    },
    horizontalDivider: {
        minHeight: 1,
        width: '100%'
    }
});

interface Props extends WithStyles<typeof styles> { }

class Header extends React.Component<Props> {
    render() {
        const { classes } = this.props;

        return (
            <Grid item={true} xs={12}>
                <Typography align="center" variant="h4" className={classes.marginTop20}>
                    CRUD APP USING REACT-REDUX
                </Typography>
                <Divider orientation="vertical" className={classes.horizontalDivider} />
            </Grid>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Header);