import React from 'react'
import {
  UrgentNotif,
} from 'components';
import{Box, Stack, Typography} from '@pankod/refine-mui'
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';


function Notifications() {
  return (
    <div>
      <Box paddingTop={2}>
    <Stack direction="row">
      <UrgentNotif
      title= {"Hypertension Patient: Med Ali"}
      body="valeur tension= 18/6"
      backgroundColor= "#F08080"
      color= "white"
      icon= {<ReportProblemOutlinedIcon style={{fontSize:50, marginRight:30}}/> } 
  />
  <UrgentNotif
      title= {"Hypertension Patient: Safa Frikha"}
      body="valeur tension= 18/6"
      backgroundColor= "#F08080"
      color= "white"
      icon= {<ReportProblemOutlinedIcon style={{fontSize:50, marginRight:30}}/> } 
  />
  <UrgentNotif
      title= {"Hypertension Patient: Safa Frikha"}
      body="valeur tension= 18/6"
      backgroundColor= "#F08080"
      color= "white"
      icon= {<ReportProblemOutlinedIcon style={{fontSize:50, marginRight:30}}/> } 
  />
    </Stack>
  </Box>
  <Box paddingTop={2}>
    <Stack direction="row">
      <UrgentNotif
      title= {" Patient: Med Ali"}
      body="oxygéne = 98 "
      backgroundColor= "white"
      color= "black"
      icon= {<ReportProblemOutlinedIcon style={{fontSize:50, marginRight:30}}/> } 
  />
  <UrgentNotif
      title= {" Patient: Safa Frikha"}
      body="oxygéne = 98"
      backgroundColor= "white"
      color= "black"
      icon= {<ReportProblemOutlinedIcon style={{fontSize:50, marginRight:30}}/> } 
  />
  <UrgentNotif
      title= {" Patient: Safa Frikha"}
      body="oxygéne = 98"
      backgroundColor= "white"
      color= "black"
      icon= {<ReportProblemOutlinedIcon style={{fontSize:50, marginRight:30}}/> } 
  />
  <UrgentNotif
      title= {" Patient: Safa Frikha"}
      body="oxygéne = 98"
      backgroundColor= "white"
      color= "black"
      icon= {<ReportProblemOutlinedIcon style={{fontSize:50, marginRight:30}}/> } 
  />
  <UrgentNotif
      title= {" Patient: Safa Frikha"}
      body="oxygéne = 98"
      backgroundColor= "white"
      color= "black"
      icon= {<ReportProblemOutlinedIcon style={{fontSize:50, marginRight:30}}/> } 
  />
    </Stack>
  </Box>
    </div>
  )
}

export default Notifications