import { useLogin } from "@pankod/refine-core";
import { Box, color, Container, RadioGroup } from "@pankod/refine-mui";
import {TunMedCare} from '../assets/assets';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import { useState, useEffect, useRef } from "react";

import { CredentialResponse } from "interfaces/interfaces/google";

import "../pages/style.css";
import {
  Row,
  Col,
  AntdLayout,
  Card,
  Typography,
} from "@pankod/refine";


import {useNavigate} from '@pankod/refine-react-router-v6'

import Signup from "./signup";

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

const [open, setOpen] = useState(false);

  const onCreate = (values: any) => {
    console.log('Received values of form: ', values);
    setOpen(false);
  };
  


    interface FormData {
      user: string;
    }

    const initialValues: FormData = {
      user: "",
    };


    const [formData, setFormData] = useState<FormData>(initialValues);
    
    const [UserName ,setUserName]=useState("")
    const [pwd ,setPwd]=useState("")

    
      const handleClickDoctor=()=>{
      
        let infosId= JSON.parse(localStorage.getItem("infosId") || "1");
          let data=
            {
              UserName : UserName,
              pwd : pwd,
              id:infosId,
            };
            
  
          let infos= JSON.parse(localStorage.getItem("infos") || "[]");
          infos.push(data);
          console.log(infos);
          localStorage.setItem("infos",JSON.stringify(infos));
          localStorage.setItem("infosId",JSON.stringify(infosId +1));
          
         // setIsDoctor({isDoctor :true})
          
        }
     
      
        const changeUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
          setUserName(event.target.value);
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
          <Box  mt={72}>
          <div style={{float:"left"}}>
            <img src={TunMedCare} alt="TunMedCare Logo" width="700px"/>
          </div>
          </Box>
          <Box mt={1}>
            <AntdLayout className="layout">
            <Row
                justify="center"
                align="middle"
                style={{
                height: "460px",
                width:"500px"
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
                                    username: "",
                                    password: "",
                                    
                                }}
                            >
                              <div style={{ marginBottom: "12px" }}>
                              <Form.Item
                                name="username"
                                rules={[{ required: true, message: 'Please input your Username!' }]}
                              >
                                <Input onChange={changeUserName} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                              </Form.Item>
                              <Form.Item
                                name="password"
                                rules={[{ required: true, message: 'Please input your Password!' }]}
                              >
                                <Input onChange={changePwd}
                                  prefix={<LockOutlined className="site-form-item-icon" />}
                                  type="password"
                                  placeholder="Password"
                                  
                                />
                              </Form.Item>
                              <Form.Item>
                                <Form.Item name="remember" valuePropName="checked" noStyle>
                                  <Checkbox style={{color:"#fcfcfc"}}>Remember me</Checkbox>
                                </Form.Item>

                              </Form.Item>

                              
                                </div>
                                <Button
                                
                                onClick={(handleClickDoctor)}
                                    style={{padding: '6px 15px',
                                    marginBottom:"10px",
                                    backgroundColor:"#fcfcfc",
                                    borderRadius:4,
                                    color:"#475be8",
                                    fontSize: 14,
                                  }}
                                    type="primary"
                                    size="large"
                                    htmlType="submit"
                                    block>
                                    Log in 
                                    
                                </Button>
                                
                            </Form>
                            <div>
                            <hr  color="#fcfcfc" ></hr>
                            <Form.Item >
                                <h3 style={{color:"#fcfcfc"}}>Or  register now!</h3>
                              
                              </Form.Item>
                            <Button
                                
                                onClick={() => {
                                  setOpen(true);
                                   }}
                                    style={{padding: '6px 15px',
                                    backgroundColor:"#fcfcfc",
                                    borderRadius:4,
                                    color:"#475be8",
                                    fontSize: 14,
                                  }}
                                    type="primary"
                                    size="large"
                                    htmlType="submit"
                                    block>
                                    Sign up 
                                    
                                </Button>
                                <Signup
                                  open={open}
                                  onCreate={onCreate}
                                  onCancel={() => {
                                    setOpen(false);
                                  }}
                                />
                            </div>
                            
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
