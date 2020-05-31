import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

class Header extends React.Component {
render() {
return (
<Grid item={true} xs={12}>
    <Typography color="initial" align="center" variant="h4">
        CRUD APP USING REACT-REDUX
    </Typography>
</Grid>
);
}
}

export default Header;