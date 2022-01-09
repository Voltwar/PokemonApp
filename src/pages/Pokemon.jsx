import React from 'react'
import * as Mui from '@mui/material'
import * as R from 'ramda'

function Pokemon() {
    const [pokes, setPokes] = React.useState({})
    const [requestUrl, setRequestUrl] = React.useState('https://pokeapi.co/api/v2/pokemon/')

    React.useEffect(() => {
        fetch(requestUrl)
            .then((res) => res.json())
            .then((result) => setPokes(result))
    }, [requestUrl])

    React.useEffect(() => console.log(pokes), [pokes])
    return (
        <>
            <Mui.Card sx={{ backgroundColor: '#ADD8E6', opacity: '1', margin: 6 }} elevation={0}>
                <Mui.CardHeader title={`${R.propOr('0', 'count', pokes)} Pokemon`} />
                <Mui.CardContent>
                    <Mui.List>
                        {R.map(
                            (pokemon) => (
                                <PokemonItem pokemon={pokemon} key={pokemon.name} />
                            ),
                            R.propOr([], 'results', pokes)
                        )}
                    </Mui.List>
                </Mui.CardContent>
                <Mui.CardActions sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                    <Mui.Button
                        variant="contained"
                        disabled={R.isNil(R.propOr(null, 'previous', pokes))}
                        onClick={() => setRequestUrl(R.propOr('', 'previous', pokes))}
                    >
                        Prev
                    </Mui.Button>
                    <Mui.Button
                        variant="contained"
                        disabled={R.isNil(R.propOr(null, 'next', pokes))}
                        onClick={() => setRequestUrl(R.propOr('', 'next', pokes))}
                    >
                        Next
                    </Mui.Button>
                </Mui.CardActions>
            </Mui.Card>
        </>
    )
}

export default Pokemon

function PokemonItem({ pokemon }) {
    const [openPokemonDialog, setOpenPokemonDialog] = React.useState(false)
    const requestUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
    const [pokemonInfo, setPokemonInfo] = React.useState({})

    React.useEffect(() => {
        fetch(requestUrl)
            .then((res) => res.json())
            .then((result) => setPokemonInfo(result))
    }, [requestUrl])

    return (
        <>
            <Mui.ListItemButton onClick={() => setOpenPokemonDialog(true)}>
                <Mui.ListItemText primary={pokemon.name} />
            </Mui.ListItemButton>
            <Mui.Dialog open={openPokemonDialog} onClose={() => setOpenPokemonDialog(false)}>
                <Mui.DialogTitle>{pokemon.name}</Mui.DialogTitle>
                <Mui.DialogContent>
                    <Mui.DialogContentText>{`All about the ${pokemon.name} Pokemon!`}</Mui.DialogContentText>
                    <Mui.DialogContentText>
                        {`${pokemon.name} weighs roughly ${R.prop('weight', pokemonInfo)} lbs.`}
                    </Mui.DialogContentText>
                    <Mui.DialogContentText>{`${pokemon.name} is ${R.prop(
                        'height',
                        pokemonInfo
                    )} decimeters tall.`}</Mui.DialogContentText>
                </Mui.DialogContent>
                <Mui.DialogActions>
                    <Mui.Button variant="contained" onClick={() => setOpenPokemonDialog(false)}>
                        Close
                    </Mui.Button>
                </Mui.DialogActions>
            </Mui.Dialog>
        </>
    )
}
