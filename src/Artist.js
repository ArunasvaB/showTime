import React, {Fragment, useState} from 'react';
import Navbar from './Navbar';
import Typography from "@material-ui/core/Typography";
import arrays from "./data";
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";
import {useHistory} from "react-router-dom";

const styles = makeStyles(() => ({
    artistImages:
        {
            width: "80%",
            height: "auto",

        },
    root:
        {
            flexGrow: "1"
        }

}));


function Artists() {
    const [language,setLanguage]=useState("english");
    const history = useHistory();

    const [genre, setGenre] = useState("any")


    function filter(currentGenre) {
        setGenre(currentGenre);
    }


    const classes = styles();
    return (


        <Fragment>


            <Navbar language={language} setLanguage={setLanguage}/>


            <Typography align="center" variant="h2">Pick Artists</Typography>

            <br/>
            <Typography>Choose Genre</Typography>
            <RadioGroup
                aria-label="genre" name="genre" value={genre}
                onChange={(event) => filter(event.target.value)}
            >
                <FormControlLabel value="any" control={<Radio/>} label="Any"/>
                <FormControlLabel value="rock" control={<Radio/>} label="Rock"/>
                <FormControlLabel value="pop" control={<Radio/>} label="Pop"/>
                <FormControlLabel value="jazz" control={<Radio/>} label="Jazz"/>
                <FormControlLabel value="hiphop" control={<Radio/>} label="Hip-Hop"/>
            </RadioGroup>
            <br/>
            <Divider/>

            {arrays.names.map((name, i) => {
                    if (arrays.genre[i] === genre || genre === "any") {

                        return (
                            <Fragment key={i}>


                                <Typography align="center">{name}</Typography>
                                <div className={classes.root}>
                                    <Grid container xs={12} spacing={3}>

                                        <Grid item xs={4}>
                                            <img src={arrays.images[i]} alt={name} className={classes.artistImages}/>
                                        </Grid>

                                        <Grid item xs={4}>
                                            <Typography align="center">{arrays.descriptions[i]}</Typography>

                                        </Grid>


                                        <Grid item xs={4}>
                                            <ReactPlayer url={arrays.songs[i]} width="80%" height="auto"/>
                                            <Button onClick={() => history.push("/artists/"+arrays.urls[i])} variant="contained" color="primary">Reviews</Button>
                                        </Grid>
                                    </Grid>
                                </div>
                                <Divider/>


                            </Fragment>
                        )
                    }
                }
            )
            }

        </Fragment>


    )
}

export default Artists;
