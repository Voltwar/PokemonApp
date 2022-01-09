import React from 'react'
import * as Mui from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import * as R from 'ramda'

import './App.css'
import Routes from './Routes'
import theme from './Theme'
import { Html, Style } from '@mui/icons-material'
import { blue, red } from '@mui/material/colors'

const links = [
    {
        name: 'Home',
        url: '/',
    },
    {
        name: 'Pokemon',
        url: '/pokemon',
    },
    {
        name: 'Locations',
        url: '/locations',
    },
    {
        name: 'Berries',
        url: '/berries',
    },
    {
        name: 'Items',
        url: '/items',
    },
    {
        name: 'Moves',
        url: '/moves',
    },
    {
        name: 'Contests',
        url: '/contests',
    },
    {
        name: 'Games',
        url: '/games',
    },
]

function App() {
    const [anchorEl, setAnchorEl] = React.useState(null)
    const open = Boolean(anchorEl)

    return (
        <>
            <ThemeProvider theme={theme}>
                <Mui.AppBar position="static">
                    <Mui.Box display="flex" flexWrap="nowrap" justifyContent="space-between">
                        <Mui.IconButton onClick={(evt) => setAnchorEl(evt.currentTarget)}>
                            <MenuIcon />
                        </Mui.IconButton>
                        <Mui.Menu anchorEl={anchorEl} open={open} onClose={() => setAnchorEl(null)}>
                            {R.map(
                                (link) => (
                                    <Mui.MenuItem key={link.url} component="a" href={link.url}>
                                        {link.name}
                                    </Mui.MenuItem>
                                ),
                                links
                            )}
                        </Mui.Menu>
                        <Mui.Avatar
                            justifyContent="center"
                            alt="PokeballIcon"
                            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/016cd9a5-7bee-44c1-b903-9a4867cfd9ea/d86jzvx-a4c98d43-1ea5-4f52-b830-54959f4ac788.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNmNkOWE1LTdiZWUtNDRjMS1iOTAzLTlhNDg2N2NmZDllYVwvZDg2anp2eC1hNGM5OGQ0My0xZWE1LTRmNTItYjgzMC01NDk1OWY0YWM3ODgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4ehQZBUj6io0JW7GUz611uchDGyM0c90Kn5YqZda7u4"
                            sx={{ width: 50, height: 50 }}
                        />
                    </Mui.Box>
                </Mui.AppBar>
                <Routes />
            </ThemeProvider>
        </>
    )
}

export default App
