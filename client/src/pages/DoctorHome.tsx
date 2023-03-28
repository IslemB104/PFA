import React from 'react'
import {useList} from '@pankod/refine-core';
import {Add, PeopleAltOutlined} from "@mui/icons-material";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import {
  UrgentNotif,
  ToDoList,
  CustomButton,
  
} from 'components';
import{Box, Stack, Typography} from '@pankod/refine-mui'
import {useNavigate} from '@pankod/refine-react-router-v6'

function DoctorHome() {
  const navigate=useNavigate();
  return (
    <div style={{width:"1200px"}}>
    <Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center">
        <Typography fontSize={25} fontWeight={700}
        color="#11142d"
        >
          Acceuil Docteur</Typography>
        <CustomButton
        title="Liste Patients"
        handleClick={()=>navigate('/AllPatients')}
        backgroundColor="#475be8"
        color="#fcfcfc"
        icon={<PeopleAltOutlined/>}
        />
        
      </Stack>
    </Box>
    <Box>
    <Stack direction="row"
      justifyContent="space-between"
      alignItems="center"
      paddingLeft={128.3}
      paddingTop={1}>
    
       <CustomButton
      
        title="Ajouter Patient"
        handleClick={()=>navigate('/AjoutPatient')}
        backgroundColor="#475be8"
        color="#fcfcfc"
        icon={<Add/>}
        
        />
    </Stack>
  </Box>
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
  <Box>
    <ToDoList/>
  </Box>
  </div>
  )
}

export default DoctorHome