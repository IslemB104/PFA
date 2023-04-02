import { useGetIdentity } from "@pankod/refine-core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Avatar,
  Stack,
  Typography,
  Box,
} from "@pankod/refine-mui";
import React, { useContext } from "react";
import NormalCard from "components/common/NormalCard";
import { Button, Form, Input, Select } from 'antd';

const { Option } = Select;

const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};

const EditDoctor = () => {
  const { data: user } = useGetIdentity();
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
          title="Enter Parametre et Valeur"
          body={
            <Box>
              <Form>
                  <Form.Item label="">
                    <Input.Group compact>
                      <Form.Item
                        name={['parametre', 'type_parametre']}
                        noStyle
                        rules={[{ required: true, message: 'Parametre is required' }]}
                      >
                        <Select placeholder="Select parametre">
                          <Option value="oxygene">Oxygéne</Option>
                          <Option value="Glycemie">Glycémie</Option>
                          <Option value="Tension">Tension</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item
                        name={['parametre', 'valeur']}
                        noStyle
                        rules={[{ required: true, message: 'value is required' }]}
                      >
                        <Input style={{ width: '50%' }} placeholder="Input value" />
                      </Form.Item>
                    </Input.Group>
                  </Form.Item>
                  <Form.Item label=" " colon={false}>
                  <Button type="primary" htmlType="submit">
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

export default EditDoctor