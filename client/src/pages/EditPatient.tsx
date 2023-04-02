import { useGetIdentity } from "@pankod/refine-core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Avatar,
  Stack,
  Typography,
  Box,
  FormControl,
  TextField,
} from "@pankod/refine-mui";
import React, { useContext, useState } from "react";
import NormalCard from "components/common/NormalCard";
import { Button, Form, Input, Select } from 'antd';

type ChatMessage = {
  user: string;
  message: string;
};




const EditPatient = () => {
  const { data: user } = useGetIdentity();
  
const [message, setMessage] = useState('');

const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setMessage(event.target.value);
}

const sendMessage = () => {
  if(user && message) {
      console.log('Send!');
      setMessage('');
  }
};

  return (
    <div><Box>
    <Stack
        direction="row"
        width="100%"
        justifyContent="flex-start"
        alignItems="center"
      >
        <NormalCard
        backgroundColor= "white"
        color='black'
          title="Profil"
          body={
            <Box>
              <Box>
              <Stack
              direction="row"
              gap="16px"
              alignItems="center"
              justifyContent="flex-start">
              {user?.avatar ? (
                <Avatar src={user?.avatar} alt={user?.name} style={{height:"100px", width:"100px"}}/>
              ) : <AccountCircleIcon style={{height:"100px", width:"100px"}}/>}
              {user?.name ? (
                <Typography style={{fontSize:"22px"}} variant="subtitle2">{user?.name}</Typography>
              ) : <Typography style={{fontSize:"22px"}} variant="subtitle2">{user?.name}</Typography>}
              
            </Stack>
            <Stack
            paddingLeft={4}
          direction="column"
          >
              <p style={{fontSize:"18px"}}>Adresse :
               <br></br>Téléphone :
               <br></br>E-mail :</p>
            </Stack>
        </Box>
      </Box>}
        />
        
        <NormalCard
        backgroundColor= "white"
        color='black'
          title="Envoyer un message"
          body={
            <Box>
              <Form>
              <FormControl fullWidth>
                      <TextField onChange={handleMessageChange} /*onKeyDown={handleEnterKey}*/
                          value={message}
                          label="Type your message..."
                          multiline
                          color='info'/>
                  </FormControl>
                  <Form.Item label=" " colon={false}>
                  <Button style={{marginTop:"10px"}} type="primary" onClick={sendMessage}>
                    Envoyer
                  </Button>
                </Form.Item>
                </Form>
              </Box>
          }
        
        
        /></Stack>
    </Box>
    </div>
  )
}

export default EditPatient