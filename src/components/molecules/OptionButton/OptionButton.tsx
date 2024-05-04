import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const OptionButton = (props: any) => {
    const navigate = useNavigate();
    console.log(props)

    return (
        <Box
            onClick={() => navigate(props.url)}
            sx={{
                py: 2,
                px: 5,
                mx: 'auto',
                my: 2.5,
                border: '1px solid black',
                borderRadius: 1.5,
                ":hover": {
                    cursor: "pointer",
                    backgroundColor: "#30363a"
                }
            }}  
        >
            <Typography variant='button'>
                {props.title}
            </Typography>
            <Typography>
                {props.description}
            </Typography>
        </Box>
    )
};

export default OptionButton;