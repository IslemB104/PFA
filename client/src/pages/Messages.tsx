import React from 'react'
import { Avatar } from "@mui/material";
import { ChatBox, ReceiverMessage, SenderMessage } from "mui-chat-box";
import NormalCard from 'components/common/NormalCard';
import{Box, Stack, Typography} from '@pankod/refine-mui'
import { Chat } from 'components';

const Messages = () => {
  
  return (
    <div>
      <Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center">
        <Typography fontSize={25} fontWeight={700}
        color="#11142d"
        >
          Messages</Typography>
          </Stack>
          </Box>
      <NormalCard
      title={<Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center">
        <Typography fontSize={22} fontWeight={700}
        color="#11142d" 
        >
          Chat</Typography>
          </Stack>
          </Box>}
      body=
      {<Chat/>}
   backgroundColor= "white"
   color='black'

     />
    </div>
  )
}

export default Messages