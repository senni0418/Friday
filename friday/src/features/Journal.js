import React, {useState} from 'react';
import ResponsiveAppBar from '../components/Basic/js/ResponsiveAppBar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Journal = () => {
    

    
    const [text, setText] = useState('')

    const [postiveResult, setPositive] = useState('')

    const [negativeResult, setNegative] = useState('')

    const [neutralResult, setNeutral] = useState('')


    const onClick = () => {
        let plainText = text.replace(/(\r\n|\n|\r)/gm, "");
        
    }


    return (
        <>
            <ResponsiveAppBar/>
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
            <div style={{display: 'flex',justifyContent:'right', marginTop: '10px', marginRight: '410px'}}>
                <Button onClick={onClick}>Button</Button>
            </div>
            <div>result here</div>
        </>
    );
}

export default Journal