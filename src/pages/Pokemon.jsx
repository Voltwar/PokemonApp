import React from 'react';
import * as Mui from '@mui/material'
import * as R from 'ramda'

function Pokemon() {
  const [pokes, setPokes] = React.useState({});
  const [requestUrl, setRequestUrl] = React.useState('https://pokeapi.co/api/v2/pokemon/');

  React.useEffect(() => {
    fetch(requestUrl)
    .then(res => res.json())
    .then(result => setPokes(result));
  }, [requestUrl]);

  React.useEffect(() => console.log(pokes), [pokes])
  return (
    <> 
    <Mui.Card>
      <Mui.CardHeader title={`${R.propOr('0', 'count', pokes)} Pokemon`}/>
      <Mui.CardContent>
        <Mui.List>
        {R.map((pokemon) => (
        <Mui.ListItem>
          <Mui.ListItemText primary={pokemon.name} />
        </Mui.ListItem>
        
        ), R.propOr([], 'results', pokes))}
        </Mui.List>
      </Mui.CardContent>
        <Mui.CardActions sx={{display: "flex", flexWrap: 'nowrap', justifyContent: 'space-between'}}>
          <Mui.Button variant="contained" disabled={R.isNil(R.propOr(null, 'previous', pokes))} onClick={() => setRequestUrl(R.propOr('', 'previous', pokes))}>Prev</Mui.Button>
          <Mui.Button variant="contained" disabled={R.isNil(R.propOr(null, 'next', pokes))} onClick={() => setRequestUrl(R.propOr('', 'next', pokes))}>Next</Mui.Button>
        </Mui.CardActions>
    </Mui.Card>
    </>  
  );
}

export default Pokemon;
