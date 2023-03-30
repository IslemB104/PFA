import {Button} from '@pankod/refine-mui';
import { CustomButtonProps } from 'interfaces/interfaces/common';
const CustomButton = ({type, title, backgroundColor,
  color, fullWidth, icon, handleClick}: CustomButtonProps) => {
  return (
    <Button 
        sx={{
          
          float:'right'? 1 :'center',
          flex: fullWidth ? 1 : 'unset',
          padding: '10px 15px',
          width: fullWidth ? '100%' : 'fit-content',
          height:"35px",
          backgroundColor,
          color,
          fontSize: 16,
          gap:'10px',
          textTransform:'capitalize',
          '&:hover':{
            opacity: 0.9,
            backgroundColor
          }
        }}
        onClick={handleClick}
    
    >
      {icon}
      {title}
    </Button>
  )
}

export default CustomButton