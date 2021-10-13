import React from 'react';
import {Grid, Typography} from '@material-ui/core';
import Image from '../../../../assets/images/user.jpg';


const Card = () => {
    return(
        <Grid
            item
            xs={12}
            className="flex justify-between"
            style={{ flexWrap: "wrap"}}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((data, index) => {
              return (
                <Grid className="card-cnt">
                  <div className="card-cnt-inner"
                  >
                      <div className="card-cnt-inner-div">
                          <img src={Image} alt="" className="card-cnt-inner-div-img" />
                      </div>
                      <div style={{padding: '0.4rem'}}>
                          <Typography>Civil Worker</Typography>
                          <Typography>Pranav honmode</Typography>
                      </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
    )
}

export default Card;