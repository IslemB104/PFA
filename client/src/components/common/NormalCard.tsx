import React from 'react'
import { NormalCardProps } from 'interfaces/interfaces/common'
import { Card, CardHeader,CardContent } from '@mui/material'

const NormalCard = ({ title,body, backgroundColor,
    color, fullWidth}: NormalCardProps) => {
  return (
    <Card
    sx={{
          flex: fullWidth ? 1 : 'unset',
          height: fullWidth ? '100%' :'fit-content' ,
          width: fullWidth ? '100%' : 'fit-content',
          minWidth: 130,
          backgroundColor,
          color,
          fontSize: 20,
          gap:'10px',
          textTransform:'capitalize',
          marginBottom:"10px",
          margin:"10px",
          border: "5px solid #fff", 
          
    }}
    >
      <CardHeader title={title} />
            <CardContent style={{justifyContent:"center"}}>
            {body} 
               
            </CardContent>

    </Card>
  )
}

export default NormalCard