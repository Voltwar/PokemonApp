import React from 'react'
import * as Mui from '@mui/material'
import * as R from 'ramda'

function Contests() {
    const [location, setLocations] = React.useState({})
    const [requestUrl, setRequestUrl] = React.useState('https://pokeapi.co/api/v2/contest-type/')

    React.useEffect(() => {
        fetch(requestUrl)
            .then((res) => res.json())
            .then((result) => setLocations(result))
    }, [requestUrl])

    React.useEffect(() => console.log(location), [location])
    return (
        <>
            <Mui.Card sx={{ backgroundColor: '#ADD8E6', opacity: '1', margin: 6 }}>
                <Mui.CardHeader title={`${R.propOr('0', 'count', location)} Contest Types`} />
                <Mui.CardContent>
                    <Mui.List>
                        {R.map(
                            (pokemon) => (
                                <Mui.ListItem>
                                    <Mui.ListItemText primary={pokemon.name} />
                                </Mui.ListItem>
                            ),
                            R.propOr([], 'results', location)
                        )}
                    </Mui.List>
                </Mui.CardContent>
                <Mui.CardActions sx={{ display: 'flex', flexWrap: 'nowrap', justifyContent: 'space-between' }}>
                    <Mui.Button
                        variant="contained"
                        disabled={R.isNil(R.propOr(null, 'previous', location))}
                        onClick={() => setRequestUrl(R.propOr('', 'previous', location))}
                    >
                        Prev
                    </Mui.Button>
                    <Mui.Button
                        variant="contained"
                        disabled={R.isNil(R.propOr(null, 'next', location))}
                        onClick={() => setRequestUrl(R.propOr('', 'next', location))}
                    >
                        Next
                    </Mui.Button>
                </Mui.CardActions>
            </Mui.Card>
        </>
    )
}

export default Contests
