import { Container, Box } from '@mui/material';
import { flexbox } from '@mui/system';
import React from 'react';
import './Login.css'

function Login() {
    return (
        <Box sx={{
            height: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 600,
                height: 700,
                borderRadius: 1,
                boxShadow: 3
            }}>

            </Box>
        </Box>
    );
}

export default Login;