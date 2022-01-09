import React from 'react'
import * as Mui from '@mui/material'
import * as R from 'ramda'

function Pokemon() {
    const [moves, setMoves] = React.useState({})
    const [requestUrl, setRequestUrl] = React.useState('https://pokeapi.co/api/v2/move/')

    React.useEffect(() => {
        fetch(requestUrl)
            .then((res) => res.json())
            .then((result) => setMoves(result))
    }, [requestUrl])

    React.useEffect(() => console.log(moves), [moves])
    return (
        <>
            <Mui.Card sx={{ backgroundColor: '#ADD8E6', opacity: '1', margin: 6 }}>
                <Mui.CardHeader title={`${R.propOr('0', 'count', moves)} Moves`} />
                <Mui.CardContent>
                    <Mui.List>
                        {R.map(
                            (pokemon) => (
                                <Mui.ListItem>
                                    <Mui.ListItemText primary={pokemon.name} />
                                </Mui.ListItem>
                            ),
                            R.propOr([], 'results', moves)
                        )}
                    </Mui.List>
                </Mui.CardContent>
                <Mui.CardActions
                    sx={{
                        display: 'flex',
                        flexWrap: 'nowrap',
                        justifyContent: 'space-between',
                    }}
                >
                    <Mui.Button
                        variant="contained"
                        disabled={R.isNil(R.propOr(null, 'previous', moves))}
                        onClick={() => setRequestUrl(R.propOr('', 'previous', moves))}
                    >
                        Prev
                    </Mui.Button>
                    <Mui.Button
                        variant="contained"
                        disabled={R.isNil(R.propOr(null, 'next', moves))}
                        onClick={() => setRequestUrl(R.propOr('', 'next', moves))}
                    >
                        Next
                    </Mui.Button>
                </Mui.CardActions>
            </Mui.Card>
        </>
    )
}

export default Pokemon
