import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { FormattedMessage } from 'react-intl';

const Footer = () => {
    return(
        <Grid container xs={12} className="footer">
            <Grid item xs={12} className="flex">
                <Grid xs={2} className="footer-cnt flex align-items-center">
                    <Typography className="footer-logo">workcanios</Typography>
                </Grid>
                {/* Legal notes */}
                <Grid item xs={2} className="legal-notes">
                    <Typography className="legal-notes-title">Legal Notes</Typography>
                    <Typography className="legal-notes-categories">Privacy Policy</Typography>
                    <Typography className="legal-notes-categories">Terms and Conditions</Typography>
                    <Typography className="legal-notes-categories">About us</Typography>
                    <Typography className="legal-notes-categories">Cookie Policy</Typography>
                </Grid>

                {/* Follow us on ( Social media ) */}
                <Grid item xs={2} className="legal-notes">
                    <Typography className="legal-notes-title">Follow us on</Typography>
                    <div className="flex">
                        <Typography className="legal-notes-icons"><FaFacebookSquare /></Typography>
                        <Typography className="legal-notes-icons"><AiFillInstagram /></Typography>
                        <Typography className="legal-notes-icons"><FaTwitterSquare /></Typography>
                    </div>
                </Grid>

                <Grid item xs={2} className="legal-notes">
                    <Typography className="legal-notes-title">Worker Categories</Typography>
                        <Typography className="legal-notes-categories">Painter</Typography>
                        <Typography className="legal-notes-categories">Civil Worker</Typography>
                        <Typography className="legal-notes-categories">Mechanic</Typography>
                </Grid>

                <Grid item xs={3} className="legal-notes">
                    <Typography className="legal-notes-title">To Receive notifications and Offers</Typography>
                    <Grid item xs={12} className="flex">
                        <input className="subscription-input" />
                        <button className="subscribe-button">Subscribe</button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid xs={12} className="footer-description">
                <Typography className="footer-description-details">
                Urban jungle is brand owned by time international sport ltd and managed by italianoperations limited srl, both companies of the hudson holdings group. Expertise and passion are the spirit of these projects, an enormously valuable resource based on over 30 years of international experience in distribution and retail. Urban jungle is brand owned by time international sport ltd and managed by italianoperations limited srl, both companies of the hudson holdings group. Expertise and passion are the spirit of these projects, an enormously valuable resource based on over 30 years of international experience in distribution and retail.
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Footer;