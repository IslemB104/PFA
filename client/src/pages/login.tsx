import { useLogin } from "@pankod/refine-core";
import { Box, Container } from "@pankod/refine-mui";
import {TunMedCare} from '../assets/assets';

import { useState, useEffect, useRef } from "react";

import { CredentialResponse } from "interfaces/interfaces/google";

import DoctorHome from "./DoctorHome";
import PatientHome from "./PatientHome";
import { useNavigate } from 'react-router-dom';

import "../pages/style.css";
import {
  Row,
  Col,
  AntdLayout,
  Card,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
  Radio,
} from "@pankod/refine";

const { Text, Title } = Typography;

export interface ILoginForm {
    username: string;
    password: string;
    remember: boolean;
}

export const Login: React.FC = () => {
  const { mutate: login } = useLogin<CredentialResponse>();
  const CardTitle = (
    <Title className="title">
        Sign in your account
    </Title>
);
///////

    const [Fname ,setFname]=useState("")
    const [Lname ,setLname]=useState("")
    const [email ,setEmail]=useState("")
    const [pwd ,setPwd]=useState("")
    const [isDoctor ,setIsDoctor]=useState({isDoctor: false})

    const handleClickDoctor=()=>{
      let infosId= JSON.parse(localStorage.getItem("infosId") || "1");
        let data=
          {
            Fname : Fname,
            Lname : Lname,
            email : email,
            pwd : pwd,
            isDoctor: true,
            id:infosId,
          };
          

        let infos= JSON.parse(localStorage.getItem("infos") || "[]");
        infos.push(data);
        console.log(infos);
        localStorage.setItem("infos",JSON.stringify(infos));
        localStorage.setItem("infosId",JSON.stringify(infosId +1));
        setIsDoctor({isDoctor :true})
        
      }
      const handleClickPatient=()=>{
        let infosId= JSON.parse(localStorage.getItem("infosId") || "1");
          let data=
            {
              Fname : Fname,
              Lname : Lname,
              email : email,
              pwd : pwd,
              isDoctor: false,
              id:infosId,
            };
  
          let infos= JSON.parse(localStorage.getItem("infos") || "[]");
          infos.push(data);
          console.log(infos);
          localStorage.setItem("infos",JSON.stringify(infos));
          localStorage.setItem("infosId",JSON.stringify(infosId +1));
          setIsDoctor({isDoctor :false})
          
        }
      
        const changeFname = (event: React.ChangeEvent<HTMLInputElement>) => {
          setFname(event.target.value);
        };
        
        const changeLname = (event: React.ChangeEvent<HTMLInputElement>) => {
          setLname(event.target.value);
        };
        
        const changeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
          setEmail(event.target.value);
        };
        
        const changePwd = (event: React.ChangeEvent<HTMLInputElement>) => {
          setPwd(event.target.value);
        };
       
        
        
        
        
        
        
      ///////////////////


  const GoogleButton = (): JSX.Element => {
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
         

        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "medium",
          type: "standard",
        });
      } catch (error) {
        console.log(error);
      }
    }, []); // you can also add your client id as dependency here

    return <div ref={divRef} />;
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundColor:'FCFCFC'
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "20vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box  mt={70}>
          <div>
            <img src={TunMedCare} alt="TunMedCare Logo" width="700px"/>
          </div>
          </Box>
          <Box mt={1}>
            <AntdLayout className="layout">
            <Row
                justify="center"
                align="middle"
                style={{
                    height: "450px",
                }}
            >
                <Col xs={22}>
                    <div className="container">
                        
                        <Card title={CardTitle} headStyle={{ borderBottom: 0 }}>
                            <Form<CredentialResponse> 
                                layout="vertical"
                                
                                onFinish={(values) => {
                                    login(values);
                                }}
                                requiredMark={false}
                                initialValues={{
                                    remember: false,
                                    email: "",
                                    password: "",
                                    isDoctor: false,
                                }}
                            >
                              <div style={{ marginBottom: "12px" }}>
                                    <Form.Item
                                        
                                        name="type"
                                        valuePropName="checked"
                                        noStyle
                                    >
                                        <Radio name="type">
                                        Patient
                                        </Radio>
                                        <Radio name="type">
                                        Doctor
                                        </Radio>
                                    </Form.Item>
                                </div>
                              <Form.Item
                                    name="name"
                                    label="Name"
                                    rules={[{ required: true }]}
                                    style={{ marginBottom: "12px" }}
                                    
                                >
                                    <Input  onChange={changeFname} value={Fname} size="large" placeholder="Name" />
                                </Form.Item>
                                <Form.Item
                                    name="last name"
                                    label="Last name"
                                    rules={[{ required: true }]}
                                    style={{ marginBottom: "12px" }}
                                >
                                    <Input  onChange={changeLname} value={Lname} size="large" placeholder="Last name" />
                                </Form.Item>
                                <Form.Item
                                    name="email"
                                    label="Email"
                                    rules={[{ required: true, type: "email" }]}
                                    style={{ marginBottom: "12px" }}
                                >
                                    <Input  onChange={changeEmail} value={email} size="large" placeholder="Email" />
                                </Form.Item>
                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[{ required: true }]}
                                    style={{ marginBottom: "12px" }}
                                >
                                    <Input
                                        type="password"
                                        placeholder="●●●●●●●●"
                                        size="large"
                                        value={pwd}
                                        onChange={changePwd}
                                    />
                                </Form.Item>
                                <div style={{ marginBottom: "12px" }}>
                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                        noStyle
                                    >
                                        <Checkbox
                                            style={{
                                                fontSize: "12px",
                                            }}
                                        >
                                            Remember me
                                        </Checkbox>
                                    </Form.Item>
                                </div>
                                <Button
                                
                                onClick={(handleClickDoctor)}
                               
                                    type="primary"
                                    size="large"
                                    htmlType="submit"
                                    block>
                                    Doctor Sign in 
                                </Button>
                                <Button
                                onClick={handleClickPatient}
                                
                                    type="primary"
                                    size="large"
                                    htmlType="submit"
                                    block>
                                    Patient Sign in 
                                </Button>
                            </Form>
                            
                        </Card>
                        
                    </div>
                </Col>
            </Row>
        </AntdLayout>

          </Box>
          <Box mt={1}>
            <GoogleButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
