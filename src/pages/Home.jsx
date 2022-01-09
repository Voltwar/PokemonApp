import React from 'react'
import * as Mui from '@mui/material'

export default function Home() {
    return (
        <>
            <Mui.Box display="flex" justifyContent="center">
                <Mui.Avatar
                    alt="PokeballIcon"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/016cd9a5-7bee-44c1-b903-9a4867cfd9ea/d86jzvx-a4c98d43-1ea5-4f52-b830-54959f4ac788.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNmNkOWE1LTdiZWUtNDRjMS1iOTAzLTlhNDg2N2NmZDllYVwvZDg2anp2eC1hNGM5OGQ0My0xZWE1LTRmNTItYjgzMC01NDk1OWY0YWM3ODgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4ehQZBUj6io0JW7GUz611uchDGyM0c90Kn5YqZda7u4"
                    sx={{ width: 300, height: 300 }}
                />
                <img
                    alt="Pokemon logo"
                    src="https://external-preview.redd.it/tQged7mKJ3cUpNMq5IMeceZvyKP3cTyHqhNmKEQ0Vv8.png?width=640&crop=smart&auto=webp&s=5fc89334e792e2c9b294d1d328bf522cdede4cdf"
                />
                <Mui.Avatar
                    alt="PokeballIcon"
                    src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/016cd9a5-7bee-44c1-b903-9a4867cfd9ea/d86jzvx-a4c98d43-1ea5-4f52-b830-54959f4ac788.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAxNmNkOWE1LTdiZWUtNDRjMS1iOTAzLTlhNDg2N2NmZDllYVwvZDg2anp2eC1hNGM5OGQ0My0xZWE1LTRmNTItYjgzMC01NDk1OWY0YWM3ODgucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.4ehQZBUj6io0JW7GUz611uchDGyM0c90Kn5YqZda7u4"
                    sx={{ width: 300, height: 300 }}
                />
            </Mui.Box>
            <Mui.Box display="flex" justifyContent="center">
                <Mui.Typography variant="h1">Pokemon React App</Mui.Typography>
            </Mui.Box>
            <Mui.Box display="flex" justifyContent="center" sx={{ margin: 6 }}>
                <Mui.Typography variant="body1">
                    The Pokémon franchise revolves around 901 fictional species of collectible monsters, each having
                    unique designs, skills, and powers. Pokémon are creatures that inhabit the fictional Pokémon World.
                    The designs for the multitude of species can draw inspiration from anything such as animals, plants,
                    mythological creatures and inanimate objects.
                </Mui.Typography>
            </Mui.Box>
        </>
    )
}
