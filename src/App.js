import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Template1 from './templates/Template1';



function App() {

  const options = [
    {value: '', text: '--Escolha uma opcao--'},
    {value: 'apple', text: 'Apple 🍏'},
    {value: 'banana', text: 'Banana 🍌'},
    {value: 'kiwi', text: 'Kiwi 🥝'},
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = event => {
    console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
<Box sx={{ minWidth: 120, padding: 5 }}>
<FormControl fullWidth>
  <InputLabel id="email-template-select-label">Age</InputLabel>
  <Select
    labelId="email-template-select-label"
    id="email-template-select"
    value={selected}
    label="Email template"
    onChange={handleChange}>
    {options.map(option => (
      <MenuItem value={option.value}>{option.text}</MenuItem>
    ))}
  </Select>
</FormControl>


    {
      selected === 'apple' && (
        <Template1/>
      )
    }
</Box>
  );
}

export default App;
