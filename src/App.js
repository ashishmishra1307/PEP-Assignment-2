import React, { useState } from 'react';
import { Segment, Grid, Header, Button } from 'semantic-ui-react';
// import 'semantic-ui-react'
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => count > 0 && setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <Segment style={{ padding: '120px', width:'100wh' , height:'100vh', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
      <Segment style={{ padding: '40px', boxShadow: '#ccc',height: '30%',width: '90%'}}>
        <Header as='h1'>Count</Header>
        <h2>{count}</h2>
        <Grid columns='equal'>
          <Grid.Row>
            <Grid.Column>
              <Button color='green' content='Increment' onClick={increment}/>
            </Grid.Column>
            <Grid.Column>
              <Button color='red' content='Decrement' disabled={count === 0} onClick={decrement} />
            </Grid.Column>
            <Grid.Column>
              <Button color='blue' content='Reset' disabled={count === 0} onClick={reset} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as='h2' style={{padding : '70px', right :'9px', color: 'black'}}>Done by : Ashish Kumar Mishra - 12018746</Header>
    </Segment>
  );
};

export default App;