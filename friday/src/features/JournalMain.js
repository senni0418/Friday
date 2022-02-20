import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import MicIcon from "@mui/icons-material/Mic";
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Journal from "./Journal";
import JournalAudio from "./JournalAudio";
import ResponsiveAppBar from '../components/Basic/js/ResponsiveAppBar';


//tsc BottomTabs.tsx --jsx preserve -t es2020 --outDir js --noEmit false
export default function JournalMain() {
  const [value, setValue] = React.useState(0);
  const [showAudio, setShowAudio] = React.useState(true);
  return (
    <Box sx={{ pb: 7 }} className="journal">
      <ResponsiveAppBar/>

      <CssBaseline />
      {showAudio ? <JournalAudio/> : <Journal/>
      }

      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            //switch component based on bottom nav value
            if((newValue) == 0){
              setShowAudio(true);
            }else{
              setShowAudio(false);
            }
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Audio" icon={<MicIcon />} />
          <BottomNavigationAction label="Text" icon={<TextSnippetIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
}

