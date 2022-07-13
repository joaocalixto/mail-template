import {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import HappyBirthday from './templates/HappyBirthday';
import AutomaticAnswer from './templates/AutomaticAnswer';
import LittleReminder from './templates/LittleReminder';



function App() {

  const options = [
    {value: '', text: '--Escolha uma opcao--'},
    {value: 'happyBirthday', text: 'Happy Birthday'},
    {value: 'automaticAnswer', text: 'Automatic Answer'},
    {value: 'littleReminder', text: 'Little Reminder'},
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
    selected === 'happyBirthday' && (
      <HappyBirthday/>
    )
  }
  {
    selected === 'automaticAnswer' && (
      <AutomaticAnswer/>
    )
  }
  {
    selected === 'littleReminder' && (
      <LittleReminder/>
    )
  }
</Box>
  );
}

export default App;
