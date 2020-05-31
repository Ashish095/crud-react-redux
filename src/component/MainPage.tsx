import * as React from 'react';

import Grid from '@material-ui/core/Grid';
import { StyleRulesCallback, WithStyles } from '@material-ui/core/styles/withStyles';
import withStyles from '@material-ui/core/styles/withStyles';

const styles: StyleRulesCallback<'root'> = theme => ({
    root: {},
    leftSection: {
        marginTop: 12
    },
    rightSection: {
        margin: 5
    },
});

interface Props { 
    headerName: string;
}
interface State { }

type CombinedProps = Props & WithStyles<'root' | 'leftSection' | 'rightSection'>;

class MainPage extends React.Component<CombinedProps, State> {
render() {
return (
<Grid item={true} xs={12}>
    <Grid item={true} xs={12}>
            Left Section{this.props.headerName}
    </Grid>
    <Grid item={true} xs={12}>
        Right Section
    </Grid>
</Grid>
);
}
}

const combinedStyles: StyleRulesCallback<'root'> = theme => {
    return Object.assign(
        {},
        styles(theme),
    );
};

export default withStyles(combinedStyles, { withTheme: true })(MainPage);