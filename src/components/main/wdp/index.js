import React from 'react';
import {Grid, Hidden, Typography, IconButton} from '@material-ui/core';
import Image from '../../../assets/images/user.jpg';
import Rating from '@material-ui/lab/Rating';
import {MdShare} from 'react-icons/md';

const WDP = () => {
    const share = {display: 'flex', justifyContent: 'flex-end', fontSize: '1.2rem'}; 
    return(
        <Grid container>
            <Grid item xs={12} className="wdp-cnt">
                <Grid item xs={12} md={6} style={{padding: '1rem'}}>
                    <Hidden only={['md', 'lg', 'xl']}>
                        <Grid item xs={12} style={share}>
                            <IconButton size="medium">
                                <MdShare className="share-icons" />
                            </IconButton>
                        </Grid>
                    </Hidden>
                    <Grid item xs={8} md={6} className="flex user-img-cnt">
                        <img src={Image} alt="user" className="user-img" />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className="worker-name">Pranav Surendra Honmode</Typography>
                        <Rating className="rating" name="size-large" value={5} size="large" />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default WDP;