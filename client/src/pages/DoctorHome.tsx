import React, { useState } from 'react'
import {useList} from '@pankod/refine-core';
import {Add, PeopleAltOutlined} from "@mui/icons-material";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import {
  UrgentNotif,
  ToDoList,
  CustomButton,
  
} from 'components';
import{Box, Stack, Typography} from '@pankod/refine-mui'
import AddPatient from './AddPatient';
import { Button } from 'antd';



function DoctorHome() {
  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };


  return (
    <div style={{width:"1270px"}}>
      
    <Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={3}>
        <Typography fontSize={25} fontWeight={700}
        color="#11142d"
        >
          Accueil Docteur</Typography>
        {/*<CustomButton
        title="Liste Patients"
        handleClick={()=>navigate('/DoctorHome/show')}
        backgroundColor="#475be8"
        color="#fcfcfc"
        icon={<PeopleAltOutlined/>}
  />*/}
       {/*<CustomButton
      
      title="Ajouter Patient"
      onClick={()=>{() => {
        setOpen(true);
         }}}
      backgroundColor="#475be8"
      color="#fcfcfc"
      icon={<Add/>}
        />*/}
      <Button
                                
        onClick={() => {
         setOpen(true);
          }}
        style={{
        backgroundColor:"#475be8",
        borderRadius:4,
        color:"#fcfcfc",
        fontSize: 18,
        width:'fit-content',
        height:"50px",
        }}
        type="primary"
        size="large"
        htmlType="submit"
        block>
       <Add style={{marginRight:"10px", fontSize:"23px"}}/> Ajouter Patient
                                    
      </Button>
      <AddPatient
        open={open}
        onCreate={onCreate}
        onCancel={() => {
        setOpen(false);
        }}
        />
      </Stack>
    </Box>
    
    
  <Box>
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