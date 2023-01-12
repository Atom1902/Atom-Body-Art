import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import css from './Navbar.module.css'
import Logo from '../../assets/images/Logo.png';

const Navbar = () => (
    <Stack direction="row" justifyContent="space-around" sx={{ gap: { lg: '1230px', sm: '123px', xs: '40px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">

            <img src={Logo} alt="logo" style={{ width: '100px', height: '80px'}}  />

        <Stack
            direction="row"
            gap="40px"
            fontFamily="Alegreya"
            fontSize="24px"
            alignItems="flex-end"
        >
      <Link to="/" className={css.home}>Home</Link>
      <a href="#exercises" className={css.exercises}>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;
