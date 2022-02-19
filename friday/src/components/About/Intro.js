
import React  from "react";
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Divider, CardMedia, Avatar } from "@mui/material";
import { makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const faces = [
    "http://i.pravatar.cc/300?img=1",
    "http://i.pravatar.cc/300?img=2",
    "http://i.pravatar.cc/300?img=3",
    "http://i.pravatar.cc/300?img=4"
  ];
    

const theme = createTheme();

const useStyles = makeStyles((theme) => ({
    card: {
        maxWidth: 700,
        margin: "auto",
        transition: "0.3s",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        "&:hover": {
        boxShadow: "0 16px 70px -12.125px rgba(0,0,0,0.3)"
        }
    },
    media: {
        paddingTop: "56.25%"
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

function Intro() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.card}>
                <CardMedia
                    className={classes.media}
                    image={
                    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
                    }
                />
                <CardContent className={classes.content}>
                    <Typography
                    className={classes.heading}
                    variant={"h6"}
                    gutterBottom
                    align="center"
                    >
                    About Us
                    </Typography>
                    <Typography
                    className={classes.subheading}
                    variant={"caption"}
                    >
                    {introduction}
                    </Typography>
                    <Divider className={classes.divider} light />
                    <CardContent className={classes.avatars}>
                    {faces.map(face => (
                        <Avatar className={classes.avatar} key={face} src={face} />
                        ))}
                    </CardContent>

                </CardContent>
            </Card>            
        </ThemeProvider>

    )
}


export default Intro