import { useGetIdentity } from "@pankod/refine-core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  AppBar,
  Avatar,
  IconButton,
  Stack,
  Toolbar,
  Typography,
  Box,
} from "@pankod/refine-mui";
import React, { useContext } from "react";
import NormalCard from "components/common/NormalCard";
function PatientProfile() {
  const { data: user } = useGetIdentity();
  return (
    <div>
      <Box>
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
                  <Avatar src={user?.avatar} alt={user?.name} style={{height:"200px", width:"200px"}}/>
                ) : <AccountCircleIcon style={{height:"200px", width:"200px"}}/>}
                {user?.name ? (
                  <Typography style={{fontSize:"26px"}} variant="subtitle2">{user?.name}</Typography>
                ) : <Typography style={{fontSize:"26px"}} variant="subtitle2">{user?.name}</Typography>}
                
              </Stack>
              <Stack
              paddingLeft={10}
            direction="column"
            >
                <p>tfcvyujhbjndggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggk</p>
                <p>tfcjyvj</p>
              </Stack>
          </Box>
        </Box>}
          />
          </Stack>
      </Box>
    </div>
  )
}

export default PatientProfile