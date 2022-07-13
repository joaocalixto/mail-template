import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';
const api_key = "-"

function LittleReminder() {



  function sendMail(){
    console.log('enviando...:');
    const data = {
      from: {
        email:"calixtounicap@gmail.com"
      },
      personalizations:[{
        to:[
          {
            email:"calixtounicap@gmail.com"
          }
        ],
        dynamic_template_data:{
          nome:"Joao Calixto",
        }
      }],
      template_id:"-"
    };
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer '+api_key
    }
    
    axios.post(`https://api.sendgrid.com/v3/mail/send`, 
    { data },  
    {headers: headers})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

return (
<Box sx={{ minWidth: 120, padding: 5 }}>
  <p>Little Reminder</p>
 

  <FormControl fullWidth>
    <Stack spacing={2}>
      <TextField id="standard-basic" label="Campo 1" variant="standard" />
      <Button variant="contained" onClick={sendMail}>Enviar</Button>
    </Stack>
  </FormControl>
  

</Box>
  );
}

export default LittleReminder;