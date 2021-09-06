import React from 'react';
import {Grid, Hidden, Typography} from '@material-ui/core';
import AccountTab from '../components/AccountTab';
import NotificationsHeader from './components/NotificationsHeader';

const Notifications = () => {
    return(
        <Grid container>
            <Grid item xs={12} className="flex account-cnt">
                <Hidden only={['xs', 'sm']}>
                  <Grid item xs={3}>
                    <AccountTab />
                  </Grid>
                </Hidden>
                <Grid item xs={12} md={9} className="notifications-cnt">
                    <Grid item xs={12}>
                        <Typography className="notifications-main-title">Notifications</Typography>
                        <Typography className="notifications-subtitle">All Notifications</Typography>
                    </Grid>
                    <Grid item xs={12}>
                           <NotificationsHeader />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Notifications;