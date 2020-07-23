import React, {Fragment, useState} from 'react';
import Navbar from './Navbar';
import Typography from "@material-ui/core/Typography";
import arrays from "./data";

function App() {

  const [language,setLanguage]=useState("english");

  return (

  <Fragment>

    <Navbar language={language} setLanguage={setLanguage}/>
    <Typography align="center" variant="h2">Showtime By Ash</Typography>

    <Typography>
      {language === "english" ? "  Welcome to the most amazing music streaming site ! Click on Artists to browse artists, listen to samples of their music and read or leave reviews for others !" : "Bonjour mon frere ! Sur le site de streaming de musique le plus incroyable ! Cliquez sur Artistes pour parcourir les artistes, écouter des extraits de leur musique et lire ou laisser des critiques pour les autres !"}

    </Typography>


  </Fragment>
  )
}

export default App;
