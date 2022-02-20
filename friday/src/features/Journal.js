import React, {useState, useEffect, useRef} from 'react';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import MicIcon from '@mui/icons-material/Mic';
import MicOffRoundedIcon from '@mui/icons-material/MicOffRounded';
import RecordRTC, { StereoAudioRecorder } from 'recordrtc';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography,  Paper } from '@mui/material';

const Journal = () => {
    const bottomRref = useRef(null);

    const textfieldRef = useRef(null);

    const [text, setText] = useState('')

    const [isRecording, setRecording] = useState(false)

    const [hasResult, setHasResult] = useState(false)

    const [pos_sentences, setPosSentences] = useState([])

    const [neu_sentences, setNeuSentences] = useState([])

    const [neg_sentences, setNegSentences] = useState([])



    const onClick = async () => {


        let plainText = text.replace(/(\r\n|\n|\r)/gm, "");
        let data = {text: plainText};
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch('http://localhost:5000/sentiment', requestOptions)
        .then(resp => {
            resp.json().then((result) => {
                setPosSentences(result.positive)
                setNeuSentences(result.neutral)
                setNegSentences(result.negative)
                setText('')
                setHasResult(true)
                bottomRref.current.scrollIntoView({ behavior: 'smooth' });
                
            })
        });


    }


    return (
        <>
            <div style={{display: 'flex',justifyContent:'center', marginTop: '100px'}}>
                <Box>
                    <TextField
                        ref={textfieldRef}
                        placeholder="Start writing your daily journals"
                        multiline
                        rows={20}
                        sx={{width: 1000}}
                        value={text}
                        onChange={(e) => {
                            setText(e.target.value)
                        }}
                    />
                </Box>
            </div>
            <div style={{justifyContent:'left', marginTop: '1vh', marginLeft: '81vw'}}>
                <IconButton aria-label="submit" component="span" onClick={onClick}>
                    <CheckCircleIcon sx={{ fontSize: 35 }}/>
                </IconButton>
            </div>
            {hasResult ? <div style={{marginTop: '100px'}}>
                <Box sx={{ typography: 'title', textAlign:'center', fontWeight: 'bold', fontSize: 30 }}>AI thinks you should ...</Box>
                <div style={{marginTop: '100px'}}>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        margin: "0 100px"
                    }}>
                        <Paper elevation={5} sx={{ p: 3, m: 3, width: '100%', height: '100%', minWidth: 200, minHeight: 500}} >
                            <Typography variant="h3" gutterBottom component="div">
                                Positive
                            </Typography>
                            {pos_sentences.map((positive) => (
                                <Typography variant="body1" gutterBottom>
                                    {positive}
                                </Typography>
                            ))}

                        </Paper>
                        <Paper elevation={5} sx={{ p: 3, m: 3, width: '100%', height: '100%', minWidth: 200, minHeight: 500, marginTop: "100px"}} >
                            <Typography variant="h3" gutterBottom component="div">
                                Neutral
                            </Typography>
                            {neu_sentences.map((neutral) => (
                                <Typography variant="body1" gutterBottom>
                                    {neutral}
                                </Typography>
                            ))}
                        </Paper>
                        <Paper elevation={5} sx={{ p: 3, m: 3, width: '100%', height: '100%', minWidth: 200, minHeight: 500, marginTop: "200px"}} >
                            <Typography variant="h3" gutterBottom component="div">
                                Negative
                            </Typography>
                            {neg_sentences.map((negative) => (
                                <Typography variant="body1" gutterBottom>
                                    {negative}
                                </Typography>
                            ))}
                        </Paper>
                        <div ref={bottomRref} />
                    </Box>
                </div>
            </div>: <div/>}
        </>

    );
}

export default Journal