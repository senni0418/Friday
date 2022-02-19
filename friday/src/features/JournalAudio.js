import React, {useState} from 'react';
import { IconButton } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import MicIcon from '@mui/icons-material/Mic';
import MicOffRoundedIcon from '@mui/icons-material/MicOffRounded';
import RecordRTC, { StereoAudioRecorder } from 'recordrtc';


let socket;
let recorder;

const JournalAudio = () => {

    const [text, setText] = useState('')

    const [isRecording, setRecording] = useState(false)

    const [postiveResult, setPositive] = useState('')

    const [negativeResult, setNegative] = useState('')

    const [neutralResult, setNeutral] = useState('')


    const onClick = () => {
        let plainText = text.replace(/(\r\n|\n|\r)/gm, "");
    }

    const micOnClick = async () => {
        // if is recording, close socket, stop recorder, else process the audio
        if (!isRecording) {
            // get temp session token from server.js (backend)
            const response = await fetch('http://localhost:5000');
            const data = await response.json();

            if(data.error){
                alert(data.error)
            }

            const { token } = data;
            // establish wss with AssemblyAI (AAI)
            socket = await new WebSocket(`wss://api.assemblyai.com/v2/realtime/ws?sample_rate=16000&token=${token}`);

            // handle incoming messages to display transcription
            const texts = {};
            socket.onmessage = (message) => {
                let msg = '';
                const res = JSON.parse(message.data);
                texts[res.audio_start] = res.text;
                const keys = Object.keys(texts);
                keys.sort((a, b) => a - b);
                for (const key of keys) {
                    if (texts[key]) {
                    msg += ` ${texts[key]}`;
                    }
                }
                setText(msg);
            };

            socket.onerror = (event) => {
                console.error(event);
                socket.close();
            }
            
            socket.onclose = event => {
                console.log(event);
                socket = null;
            }

            socket.onopen = () => {
                // once socket is open, begin recording
                setText('')
                navigator.mediaDevices.getUserMedia({ audio: true })
                    .then((stream) => {
                        recorder = new RecordRTC(stream, {
                        type: 'audio',
                        mimeType: 'audio/webm;codecs=pcm', // endpoint requires 16bit PCM audio
                        recorderType: StereoAudioRecorder,
                        timeSlice: 250, // set 250 ms intervals of data that sends to AAI
                        desiredSampRate: 16000,
                        numberOfAudioChannels: 1, // real-time requires only one channel
                        bufferSize: 4096,
                        audioBitsPerSecond: 128000,
                        ondataavailable: (blob) => {
                            const reader = new FileReader();
                            reader.onload = () => {
                            const base64data = reader.result;
            
                            // audio data must be sent as a base64 encoded string
                            if (socket) {
                            socket.send(JSON.stringify({ audio_data: base64data.split('base64,')[1] }));
                            }
                            };
                            reader.readAsDataURL(blob);
                        },
                        });
            
                        recorder.startRecording();
                    })
                    .catch((err) => console.error(err));
                };

        } else {
            // close socket
            if (socket) {
                socket.send(JSON.stringify({terminate_session: true}));
                socket.close();
                socket = null;
            }
            // stop recorder
            if (recorder) {
                recorder.pauseRecording();
                recorder = null;
            }
        }
        setRecording(!isRecording)
    }

    return (
        <>
             <div style={{display: 'flex',justifyContent:'center', marginTop: '100px'}}>
                <Box>
                    <TextField
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
                {console.log(text)}       
            </div>
            <div style={{justifyContent:'right', marginTop: '10px', marginLeft: '1300px'}}>
                <IconButton aria-label="Mic" component="span" onClick={micOnClick}>
                    {isRecording? <MicOffRoundedIcon sx={{ fontSize: 35 }}/> : <MicIcon sx={{ fontSize: 35 }}/>}
                </IconButton>
                <Button onClick={onClick}>Button</Button>
            </div>
            <div>result here</div>
        </>
       
    );
}

export default JournalAudio