import { AuthProvider, Refine  } from "@pankod/refine-core";
import {
  CssBaseline,
  ErrorComponent,
  GlobalStyles,
  ReadyPage,
  RefineSnackbarProvider,
  notificationProvider,
  Icon,
  color,
  width,
} from "@pankod/refine-mui";

import { 
  AccountCircleOutlined,
  ChatBubbleOutline,
  
 } from "@mui/icons-material";
 import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
 import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
 import { parseJwt } from "utils/parse-jwt";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import axios, { AxiosRequestConfig } from "axios";
import { Header, Layout, Sider, Title } from "components/layout";
import { ColorModeContextProvider } from "contexts";
import { CredentialResponse } from "interfaces/interfaces/google";
import{Badge} from "antd";
import { 
  Login,
  DoctorHome,
  PatientHome,
  Notifications,
  Calender,
  Messages,
  Profile,
 } from "pages";
 


 import { useState, useEffect } from "react";
import { Box } from "@mui/system";
 




const axiosInstance = axios.create();
axiosInstance.interceptors.request.use((request: AxiosRequestConfig) => {
  const token = localStorage.getItem("token");
  if (request.headers) {
    request.headers["Authorization"] = `Bearer ${token}`;
  } else {
    request.headers = {
      Authorization: `Bearer ${token}`,
    };
  }

  return request;
});

function App() {
  const authProvider: AuthProvider = {
    login: ({ credential }: CredentialResponse) => {
      const profileObj = credential ? parseJwt(credential) : null;

      if (profileObj) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            ...profileObj,
            avatar: profileObj.picture,
          })
        );
      }

      localStorage.setItem("token", `${credential}`);

      return Promise.resolve();
    },
    logout: () => {
      const token = localStorage.getItem("token");

      if (token && typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        axios.defaults.headers.common = {};
        window.google?.accounts.id.revoke(token, () => {
          return Promise.resolve();
        });
      }

      return Promise.resolve();
    },
    checkError: () => Promise.resolve(),
    checkAuth: async () => {
      const token = localStorage.getItem("token");

      if (token) {
        return Promise.resolve();
      }
      return Promise.reject();
    },

    getPermissions: () => Promise.resolve(),
    getUserIdentity: async () => {
      const user = localStorage.getItem("user");
      if (user) {
        return Promise.resolve(JSON.parse(user));
      }
    },
  };


  
  ////////////
    const[user,setUser]=useState();

    useEffect(()=>{
        getAllInfos()
    },[]);

    const getAllInfos=()=>{
        let infos= JSON.parse(localStorage.getItem("infos") || "[]");
        setUser(infos);
    }
    useEffect(()=>{
       console.log(user)
    },[]);
  const Doctor= JSON.parse(localStorage.getItem("infos") || "[]").isDoctor;
  
 

  
///////////////
  return (
    <div>
     
    
    
    <ColorModeContextProvider>
    
      <CssBaseline />
      
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
      
        <Refine
        
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          
          
          resources={[
            
            {
              name: "Notifications",
              list: Notifications,
              options: { label: "Notifications" },
              icon: <Badge  
              style={{ backgroundColor: '#e00a24' ,color:'white', borderRadius:"8px" }}
              count={ 8 }><CircleNotificationsIcon /></Badge>,
            },
            {
              name: "Calendrier",
              list: Calender,
              options:{label: 'Calendrier'},
              icon:<CalendarMonthIcon/>
              
            },
            /*{
              name: "Liste Patients",
              list: MuiInferencer,
              options:{label: 'Liste Patients'},
              icon:<PeopleAltOutlined/>
            },*/
            {
              name: "Messages",
              list: Messages,
              options:{label: 'Messages'},
              icon:<Badge  
              style={{ backgroundColor: '#e00a24' ,color:'white', borderRadius:"8px" }}
              count={ 4 }><ChatBubbleOutline/></Badge>
            },
            {
              name: "Profil",
              list: Profile,
              options:{label: 'Profil'},
              icon:<AccountCircleOutlined/>
            },
          ]}
          Title={Title}
          Sider={Sider}
          Header={Header}
          Layout={Layout}
          routerProvider={routerProvider}
          authProvider={authProvider}
          LoginPage={Login}
          DashboardPage={() => (
            <Box>
                {Doctor ? <DoctorHome /> :<PatientHome /> }
                </Box>
          )}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
    </div>
  );
}

export default App;
