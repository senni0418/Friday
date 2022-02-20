
import React  from "react";
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Box from '@mui/material/Box';
import { Divider, CardMedia, Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const faces = [
    "/avatar1.png",
    "/avatar2.png",
    "/avatar3.png",
];


const theme = createTheme();

const useStyles = makeStyles((theme) => ({
    card: {
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "56.25%",
        maxWidth:"560px",
        maxHeight:"305px",
        width: "auto",
        height: "auto",
    },
    content: {
        textAlign: "left",
        padding: "10px"
    },
    divider: {
        margin:"30px 0"
    },
    heading: {
        fontWeight: "bold"
    },
    subheading: {
        lineHeight: 2.4
    },
    avatars: {
        display: "flex",
        flexDirection: "row",
    },
    avatar: {
        border: "2px solid white",
    }
}));

const introduction = "We are a group of enthusiastic student developer from McMaster University. Friday is a project we made during StormHacks 2022 to support people with mental disorder."
const inspiration = "Depression is a common illness worldwide, with estimately 280 million of the population affected. One of the ways to deal with any overwhelming emotion is to find a healthy way to express yourself. This makes a journal a helpful tool in managing your mental health. Journaling can help you manage anxiety, reduce stress. When you have a problem and you're stressed, keeping a journal can help you identify what’s causing that stress or anxiety. Once you’ve identified your stressors, you can work on a plan to resolve the problems and reduce your stress."


function Intro() {
    const classes = useStyles();
    return (
    <Card sx={{ display: 'flex', justifyContent: 'center'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
        <Divider className={classes.divider} light />
          <Typography component="div" variant="h5">
            Inspiration
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            StormHacks 2022 Project
          </Typography>
          <Typography
            className={classes.subheading}
            variant={"h8"}>
                    {inspiration}
            </Typography>
            <Divider className={classes.divider} light />
            <Typography component="div" variant="h5">
            About Us
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Team EmotionDamage
          </Typography>
          <Typography
            className={classes.subheading}
            variant={"h8"}>
                    {introduction}
            </Typography>
            <CardContent className={classes.avatars}>
            {faces.map(face => (
                        <Avatar className={classes.avatar} key={face} src={face} />
                        ))}
                    </CardContent>
            <Divider className={classes.divider} light />
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 600 }}
        image="/happy.png"
        alt="Live from space album cover"
      />
    </Card>

    )
}


export default Intro