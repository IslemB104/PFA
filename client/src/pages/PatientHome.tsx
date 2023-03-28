import React from 'react';
import {useList} from '@pankod/refine-core';
import {Add, PeopleAltOutlined} from "@mui/icons-material";
import {
  UrgentNotif,
  ToDoList,
  CustomButton,
  
} from 'components';
import{Box, Stack, Typography} from '@pankod/refine-mui'
import {useNavigate} from '@pankod/refine-react-router-v6'

const PatientHome = () => {

  const navigate=useNavigate();

  return (
    <div>
    <Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center">
        <Typography fontSize={25} fontWeight={700}
        color="#11142d"
        >
          Aceuil Patient</Typography>
        <CustomButton
        title="Liste Medecins"
        handleClick={()=>{}}
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
      paddingLeft={138.3}
      paddingTop={1}>
    
       <CustomButton
      
        title="Ajouter Docteur"
        handleClick={()=>navigate('/AjoutPatient')}
        backgroundColor="#475be8"
        color="#fcfcfc"
        icon={<Add/>}
        
        />
    </Stack>
  </Box>
  <Box>
    <ToDoList/>
  </Box>
    </div>
  )
}

export default PatientHome