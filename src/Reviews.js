import React, {Fragment, useState} from 'react';
import arrays from "./data";
import {Route} from "react-router-dom";
import Navbar from "./Navbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Rating from "@material-ui/lab/Rating";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

const styles = makeStyles(() => ({
    artistImages:
        {
            width: "40%",
            height: "auto"
        },


}));


function Reviews() {
    const [language,setLanguage]=useState("english");
    const [open, setOpen] = React.useState(false);
    const [review,setReview] = useState("");
    const classes = styles();
    let url = window.location.pathname
    url = url.substring(9);
    let indx = arrays.urls.indexOf(url);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const handleClick = () => {
        setOpen(true);
    };
    return (


            <Route exact path={"/artists/" + url}>
                <Navbar language={language} setLanguage={setLanguage}/>
                <Grid container justify="center">
                <img src={arrays.images[indx]} className={classes.artistImages} alt="OG Gangsta Squad"/>
                </Grid>

                <br/>
                <Typography align="center">{arrays.names[indx]}</Typography>
                <TextField
                    id="outlined-multiline-static"
                    label="Enter your review"
                    multiline
                    color="secondary"
                    rows={5}
                    variant="outlined"
                    value={review}
                    onChange={e => setReview(e.target.value)}
                />
                <br/>
                <Rating/>
                <br/>
                <Button variant="contained" color="primary" onClick={handleClick}>Submit
                </Button>
                <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success">
                        Your review has been submitted ! Our moderators will check it and then post it !
                    </Alert>
                </Snackbar>


                {arrays.reviewer[indx].map((name,i)=>
                    {
                        return(
                            <Fragment key ={i}>
                                <Divider/>
                                <Typography>{name}</Typography>
                                <br/>
                                <Typography>{arrays.reviews[indx][i]}</Typography>
                                <br/>
                                <Rating value={arrays.ratings[indx][i]}/>
                            </Fragment>
                        )
                    }
                )}

            </Route>


    )
}

export default Reviews;