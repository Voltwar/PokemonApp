import React from 'react';
import * as Mui from '@mui/material'
import * as R from 'ramda'

function Berries() {
  const [berries, setBerries] = React.useState({});
  const [requestUrl, setRequestUrl] = React.useState('https://pokeapi.co/api/v2/berry/');

  React.useEffect(() => {
    fetch(requestUrl)
    .then(res => res.json())
    .then(result => setBerries(result));
  }, [requestUrl]);

  React.useEffect(() => console.log(berries), [berries])
  return (
    <> 
    <Mui.Card>
      <Mui.CardHeader title={`${R.propOr('0', 'count', berries)} Berries`}/>
      <Mui.CardContent>
        <Mui.List>
        {R.map((pokemon) => (
        <Mui.ListItem>
          <Mui.ListItemText primary={pokemon.name} />
        </Mui.ListItem>
        
        ), R.propOr([], 'results', berries))}
        </Mui.List>
      </Mui.CardContent>
        <Mui.CardActions sx={{display: "flex", flexWrap: 'nowrap', justifyContent: 'space-between'}}>
          <Mui.Button variant="contained" disabled={R.isNil(R.propOr(null, 'previous', berries))} onClick={() => setRequestUrl(R.propOr('', 'previous', berries))}>Prev</Mui.Button>
          <Mui.Button variant="contained" disabled={R.isNil(R.propOr(null, 'next', berries))} onClick={() => setRequestUrl(R.propOr('', 'next', berries))}>Next</Mui.Button>
        </Mui.CardActions>
    </Mui.Card>
    </>  
  );
}

export default Berries;
