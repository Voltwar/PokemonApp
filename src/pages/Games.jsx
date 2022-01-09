import React from 'react'
import * as Mui from '@mui/material'
import * as R from 'ramda'

function Games() {
    const [games, setGames] = React.useState({})
    const [requestUrl, setRequestUrl] = React.useState('https://pokeapi.co/api/v2/generation/')

    React.useEffect(() => {
        fetch(requestUrl)
            .then((res) => res.json())
            .then((result) => setGames(result))
    }, [requestUrl])

    React.useEffect(() => console.log(games), [games])
    return (
        <>
            <Mui.Card sx={{ backgroundColor: '#ADD8E6', opacity: '1', margin: 6 }}>
                <Mui.CardHeader title={`${R.propOr('0', 'count', games)} Games`} />
                <Mui.CardContent>
                    <Mui.List>
                        {R.map(
                            (pokemon) => (
                                <Mui.ListItem>
                                    <Mui.ListItemText primary={pokemon.name} />
                                </Mui.ListItem>
                            ),
                            R.propOr([], 'results', games)
                        )}
                    </Mui.List>
                </Mui.CardContent>
                <Mui.CardActions sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                    <Mui.Button
                        variant="contained"
                        disabled={R.isNil(R.propOr(null, 'previous', games))}
                        onClick={() => setRequestUrl(R.propOr('', 'previous', games))}
                    >
                        Prev
                    </Mui.Button>
                    <Mui.Button
                        variant="contained"
                        disabled={R.isNil(R.propOr(null, 'next', games))}
                        onClick={() => setRequestUrl(R.propOr('', 'next', games))}
                    >
                        Next
                    </Mui.Button>
                </Mui.CardActions>
            </Mui.Card>
        </>
    )
}

export default Games
