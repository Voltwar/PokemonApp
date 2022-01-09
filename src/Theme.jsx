import { red, blue } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        fontFamily: [
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        body1: {
            fontSize: 24,
        },
    },
    palette: {
        primary: {
            main: red[500],
        },
        secondary: {
            main: blue[500],
        },
    },
})

export default theme
