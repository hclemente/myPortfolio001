import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/theme';
import Header from './ui/header'

function App() {

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Header value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex}/>

    </ThemeProvider>

  );
}

export default App;
