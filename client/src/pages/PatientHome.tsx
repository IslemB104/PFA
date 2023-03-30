import React, { useState } from 'react';
import {Add} from "@mui/icons-material";
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import {
  UrgentNotif,
  ToDoList,
  CustomButton,
  
} from 'components';
import{Box, Stack, Typography} from '@pankod/refine-mui'
import { Button } from 'antd';
import AddPatient from './AddPatient';
import AddDoctor from './AddDoctor';

const PatientHome = () => {

  const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };

  return (
    <div>
    <Box>
      <Stack direction="row"
      justifyContent="space-between"
      alignItems="center"
      marginBottom={3}>
        <Typography fontSize={25} fontWeight={700}
        color="#11142d"
        >
          Acceuil Patient</Typography>
          {/*<CustomButton
      
          title="Ajouter Docteur"
          handleClick={()=>navigate('/PatientHome/create')}
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
       <Add style={{marginRight:"10px", fontSize:"23px"}}/> Ajouter Docteur
                                    
      </Button>
      <AddDoctor
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
      title= {"D.Samir L."}
      body="Vous devez prendre vos médicaments"
      backgroundColor= "#F08080"
      color= "white"
      icon= {<ReportProblemOutlinedIcon style={{fontSize:50, marginRight:30}}/> } 
  />
  <UrgentNotif
      title= {"D.Rima S."}
      body="Vous devez boire quelque chose sucré"
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

export default PatientHome