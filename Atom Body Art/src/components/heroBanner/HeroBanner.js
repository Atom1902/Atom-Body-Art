
import React from 'react';
import { Box, Typography } from '@mui/material';



const HeroBanner = () => (
    <Box alignItems="center" mt="37px" justifyContent="center" p="20px">

        <Typography fontWeight={600} color="#FFFF" sx={{ opacity: '0.8', fontSize: { lg: '100px', xs: '30px' } }}  textAlign="center">
            Atom Body ART
        </Typography>

    </Box>
);

export default HeroBanner;


