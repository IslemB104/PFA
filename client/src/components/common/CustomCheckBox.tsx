import React from 'react'
import { Checkbox } from '@mui/material';
import  {CheckboxProps } from  'interfaces/interfaces/common';

const CustomCheckBox= ({ checked, onChange }:CheckboxProps ) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.checked);
    };
  
    return (
      <div>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          sx={{
           
            color:"#475be8",
            '&.Mui-checked': {
                color: "#475be8"}
        
        }}
        />
      </div>
    );
  };

export default CustomCheckBox