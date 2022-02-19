import React, {useState} from 'react';
import ResponsiveAppBar from '../components/Basic/js/ResponsiveAppBar';
import TextField from '@mui/material/TextField';

const Journal = () => {
    const [text, setText] = useState('')

    return (
        <>
            <ResponsiveAppBar/>
            <div style={{display: 'flex', justifyContent:'center', marginTop: '100px', height: '100vh'}}>
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

            </div>
        </>
    );
}

export default Journal