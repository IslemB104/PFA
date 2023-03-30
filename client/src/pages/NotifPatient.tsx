import React from 'react'
import {
  UrgentNotif,
} from 'components';
import{Box, Stack, Typography} from '@pankod/refine-mui'
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';

const NotifPatient = () => {
  return (
    <div><Box paddingTop={2}>
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
  </Box></div>
  )
}

export default NotifPatient