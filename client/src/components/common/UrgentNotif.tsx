import React from 'react'
import { NotifCardProps } from 'interfaces/interfaces/common'
import { Card, CardHeader,CardContent,makeStyles  } from '@mui/material'

const UrgentNotif = ({ title,body, backgroundColor,
  color, fullWidth, icon}: NotifCardProps) => {
    
  return (
    <Card
    sx={{
          flex: fullWidth ? 1 : 'unset',
          height: fullWidth ? '100%' :'fit-content' ,
          width: fullWidth ? '100%' : 'fit-content',
          minWidth: 130,
          backgroundColor,
          color,
          fontSize: 24,
          gap:'10px',
          //textTransform:'capitalize',
          marginBottom:"10px",
          margin:"10px",
          border: "5px solid #fff", 
          
    }}
    >
      <CardHeader title={title} />
            <CardContent style={{justifyContent:"center"}}>
            {icon}{body} 
               
            </CardContent>

    </Card>
  )
}

export default UrgentNotif