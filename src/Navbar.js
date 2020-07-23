import React, {Component} from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import {useHistory} from "react-router-dom";
import Toolbar from "@material-ui/core/Toolbar";
import makeStyles from "@material-ui/core/styles/makeStyles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";

const styles = makeStyles(() => ({
    tool: {
        padding: "0",
        display: "flex",
        alignItems: "space-between"
    }

}));


function Navbar({language, setLanguage}) {

let classes = styles();

    const history = useHistory();
    return (
        <AppBar position="sticky">
            <Toolbar className={classes.tool} variant="dense">
            <Tabs>
                <Tab value="home" label="Home" onClick={() => history.push("/")}/>
                <Tab value="artists" label="Artists" onClick={() => history.push("/artists")}/>

            </Tabs>
                <RadioGroup
                    row
                    aria-label="genre" name="genre" value={language}
                    onChange={(event) => setLanguage(event.target.value)}
                >
                    <FormControlLabel value="english" control={<Radio/>} label="EN"/>
                    <FormControlLabel value="french" control={<Radio/>} label="FR"/>
                </RadioGroup>
                </Toolbar>
        </AppBar>
    )

}

export default Navbar;