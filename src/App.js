import './App.css';
import { Container, Box } from '@mui/system';
import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';


function App() {
  const ending = 'mp4'
  let urlAPI = 'false';

  const [url, setUrl] = useState('')

  const getURL = () => {
    axios.get('https://random.dog/woof.json').then(res => {
      if (res.data.url.slice(-3) === 'mp4' || res.data.url.slice(-3) === 'gif') { setUrl(res.data.url); }

    })
  }


  return (
    <div className="App">
      <Container
        maxWidth="md"
        style={{ position: "relative", top: "2vh", backgroundColor: '#FFA69E', borderRadius: '5px', border: '3px solid #AED9E0' }}>
        <Box textAlign={'center'}>
          <div>
            <h1>Click the button to generate a random dog video!</h1>
            <Button
              variant="text"
              style={{ border: '2px solid #5E6472', color: '#5E6472' }}
              onClick={getURL}
            >GENERATE</Button>
          </div>
          <br />
          <video
            style={{display:'-ms-flexbox'}}
            controls
            autoPlay
            src={url} />
        </Box>
      </Container>

    </div>
  );
}

export default App;
