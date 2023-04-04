import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => {
    const palette = {
        mode,
        primary: {
            main: mode === 'light' ? '#fffff' : '#90caf9',
        },
        secondary: {
            main: mode === 'light' ? '#dc004e' : '#f48fb1',
        },
    };

    const typography = {
        // fontFamily: 'Roboto',
        // fontWeightRegular: 400,
        // fontWeightMedium: 500,
        // fontWeightBold: 700,
        // h1: {
        //     fontSize: '5rem',
        //     fontWeight: 500,
        //     lineHeight: 1.2,
        // },
        // h2: {
        //     fontSize: '2.25rem',
        //     fontWeight: 500,
        //     lineHeight: 1.2,
        // },
        // h3: {
        //     fontSize: '1.5rem',
        //     fontWeight: 500,
        //     lineHeight: 1.2,
        // },
        // h4: {
        //     fontSize: '1.25rem',
        //     fontWeight: 500,
        //     lineHeight: 1.2,
        // },
        // h5: {
        //     fontSize: '1.125rem',
        //     fontWeight: 500,
        //     lineHeight: 1.2,
        // },
        // h6: {
        //     fontSize: '1rem',
        //     fontWeight: 500,
        //     lineHeight: 1.2,
        // },
        // body1: {
        //     fontSize: '1rem',
        //     lineHeight: 1.5,
        // },
        // body2: {
        //     fontSize: '0.875rem',
        //     lineHeight: 1.5,
        // },
    };

    return createTheme({
        palette,
        typography,
    });
};

export default getTheme;
