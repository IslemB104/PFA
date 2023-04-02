import { AuthProvider, Refine  } from "@pankod/refine-core";
import {
  CssBaseline,
  ErrorComponent,
  GlobalStyles,
  ReadyPage,
  RefineSnackbarProvider,
  notificationProvider,
} from "@pankod/refine-mui";

import { 
  AccountCircleOutlined,
  ChatBubbleOutline,
  PeopleAltOutlined,
  
 } from "@mui/icons-material";
 import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
 import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
 import HomeIcon from '@mui/icons-material/Home';
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
  DoctorProfile,
  PatientProfile,
  AdminHome,
  AllDoctors,
  AllPatients,
  NotifPatient,
  MessagesPatient,

 } from "pages";
 


 import { useState, useEffect } from "react";
import { Box } from "@mui/system";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import EditPatient from "pages/EditPatient";
import EditDoctor from "pages/EditDoctor";

const API_TOKEN = "keyI18pnBeEMfPAIb";
const BASE_ID = "appKYl1H4k9g73sBT";



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
////////////////////////

<Router basename={process.env.PUBLIC_URL}>
        <Route path="PatientHome" element={<PatientHome/>} />
        <Route path="DoctorHome" element={<DoctorHome/>} />
        <Route path="AdminHome" element={<AdminHome/>} />
        <Route path="AllPatients" element={<AllPatients/>} />
        <Route path="AllDoctors" element={<AllDoctors/>} />
        <Route path="/Doctors">
          <Route index element={<AllDoctors />} />
          <Route path="/edit/:id" element={<EditDoctor />} />
        </Route>
        <Route path="/Patients">
          <Route index element={<AllPatients />} />
          <Route path="/edit/:id" element={<EditPatient />} />
        </Route>
</Router>


///////////////////////
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
  interface data
  {
    Fname : string;
    Lname : string;
    email : string;
    pwd : string;
    type: string;
  };
  
    const [infos, setInfos] = useState<data | null>(null);
    
    useEffect(()=>{
        getAllInfos()
        
        console.log(infos?.type)
        
    },[]);

    const getAllInfos=()=>{
        let infos= JSON.parse(localStorage.getItem("infos") || "[]");
        setInfos(infos);
        
    }
    let Type= infos?.type;
    
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
          
          
          resources={!(Type==="doctor") ?[
            {
              name:"DoctorHome",
              options: { label: "Acceuil" },
              list:DoctorHome,
              //create: AddPatient,
              icon: <HomeIcon/>
              
              
            },
            
            {
              name: "Notifications",
              list: Notifications,
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
            {
              name: "Patients",
              list: AllPatients,
              edit:EditPatient,
              options:{label: 'Liste Patients'},
              icon:<PeopleAltOutlined/>
            },
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
              list: DoctorProfile,
              options:{label: 'Profil'},
              icon:<AccountCircleOutlined/>
            },
            
           
          ]:[
            {
              name:"PatientHome",
              options: { label: "Acceuil" },
              list:PatientHome,
              icon: <HomeIcon/>
            },
            {
              name: "Notifications",
              list: NotifPatient,
              options: { label: "Notifications" },
              icon: <Badge  
              style={{ backgroundColor: '#e00a24' ,color:'white', borderRadius:"8px" }}
              count={ 8 }><CircleNotificationsIcon /></Badge>,
            },
            {
              name: "Doctors",
              list: AllDoctors,
              edit:EditDoctor,
              options:{label: 'Docteurs'},
              icon:<PeopleAltOutlined/>
            },
            {
              name: "Messages",
              list: MessagesPatient,
              options:{label: 'Messages'},
              icon:<Badge  
              style={{ backgroundColor: '#e00a24' ,color:'white', borderRadius:"8px" }}
              count={ 4 }><ChatBubbleOutline/></Badge>
            },
            {
              name: "Profil",
              list: PatientProfile,
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
          /*DashboardPage={() => (
            <Box>
                {(Type==="doctor") ? <AdminHome/> :(Type==="patient") ?  <PatientHome /> :  < DoctorHome /> } 
                </Box>
          )}*/
          
        />
        {/*<Refine 
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          routerProvider={routerProvider}
              

            resources={[
                
              {
              name:"DoctorHome",
              list:DoctorHome,
              create: AddPatient,
              show: AllPatients,
              parentName:"Acceuil",
              
            },
            
            {
              name:"PatientHome",
              list:PatientHome,
              create: AddDoctor,
              show: AllDoctors,
            },
            ]}
      
      
      
      />*/}
      </RefineSnackbarProvider>
      
    </ColorModeContextProvider>
    </div>
  );
}

export default App;
