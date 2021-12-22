import React from 'react';
import * as Mui from '@mui/material'
import * as R from 'ramda'

function Items() {
  const [items, setItems] = React.useState({});
  const [requestUrl, setRequestUrl] = React.useState('https://pokeapi.co/api/v2/item/');

  React.useEffect(() => {
    fetch(requestUrl)
    .then(res => res.json())
    .then(result => setItems(result));
  }, [requestUrl]);

  React.useEffect(() => console.log(items), [items])
  return (
    <> 
    <Mui.Card>
      <Mui.CardHeader title={`${R.propOr('0', 'count', items)} Items`}/>
      <Mui.CardContent>
        <Mui.List>
        {R.map((pokemon) => (
        <Mui.ListItem>
          <Mui.ListItemText primary={pokemon.name} />
        </Mui.ListItem>
        
        ), R.propOr([], 'results', items))}
        </Mui.List>
      </Mui.CardContent>
        <Mui.CardActions sx={{display: "flex", flexWrap: 'nowrap', justifyContent: 'space-between'}}>
          <Mui.Button variant="contained" disabled={R.isNil(R.propOr(null, 'previous', items))} onClick={() => setRequestUrl(R.propOr('', 'previous', items))}>Prev</Mui.Button>
          <Mui.Button variant="contained" disabled={R.isNil(R.propOr(null, 'next', items))} onClick={() => setRequestUrl(R.propOr('', 'next', items))}>Next</Mui.Button>
        </Mui.CardActions>
    </Mui.Card>
    </>  
  );
}



export default Items;
