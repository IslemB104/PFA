import { Box, Stack } from '@mui/system';
import React,{ useState } from 'react';
import NormalCard from './NormalCard';
import {CustomButton,CustomCheckBox} from 'components';
import { ListItemProps } from  'interfaces/interfaces/common';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const ListItem = ({changed, checked, remove, children }: ListItemProps) => {
  return (
      <div>
          <div>
            <table width={400}>
              <tr>
                <td>
                <CustomCheckBox
                      checked={checked}
                      onChange={changed}
                      
                  />
                  </td>
                  <td text-align='left' >
              <label  >
                  {children} 
              </label></td>
              <td>
          <CustomButton
              
              title=""
              handleClick={remove}
              backgroundColor="#fcfcfc"
              color="#475be8"
              icon={<HighlightOffIcon style={{fontSize:"16px"}}/>}
              
          /></td></tr></table></div>
          
      </div>
  );
};


interface TodoItem {
  id: number;
  task: string;
  isCompleted: boolean;
}

interface State {
  visitSaleOptions: {
    todos: TodoItem[];
    inputValue: string;
  };
}

///////////////////////////////////////////////////////////////////////////////

const ToDoList = () => {
  
  const [state, setState] = useState({
    visitSaleOptions: {
      todos: [
        {
          id: 1,
          task: 'Pick up kids from school',
          isCompleted: false,
        },
        {
          id: 2,
          task: 'Prepare for presentation',
          isCompleted: false,
        },
        {
          id: 3,
          task: 'Print Statements',
          isCompleted: false,
        },
        {
          id: 4,
          task: 'Create invoice',
          isCompleted: false,
        },
        {
          id: 5,
          task: 'Call John',
          isCompleted: false,
        },
        {
          id: 6,
          task: 'Meeting with Alisa',
          isCompleted: false,
        },
      ],
      inputValue: '',
    },
  })
   

  
  const statusChangedHandler=(todoId: number)=> {
    
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        todo.isCompleted = !todo.isCompleted;
      }
      return todo;
    });

     setState({
      visitSaleOptions: {
        todos: updatedTodos,
        inputValue: state.visitSaleOptions.inputValue,
      },
    });
    
  }

  function addTodo() {
    
    const newId = todos.length + 1;
    const newTodo = {
      id: newId,
      task: state.visitSaleOptions.inputValue,
      isCompleted: false,
    };
    const updatedTodos = todos.concat(newTodo);
    setState({
      visitSaleOptions: {
        todos: updatedTodos,
        inputValue: "",
      },
    });
  }


  const removeTodo = (id: number)=>{
    
    const updatedTodos = todos.filter(todo => todo.id!== id);
    setState({
      visitSaleOptions: {
        todos: updatedTodos,
        inputValue: state.visitSaleOptions.inputValue,
      },
    });
    
  }

  const inputChangeHandler=(event: React.ChangeEvent<HTMLInputElement>)=> {
    setState({
      visitSaleOptions: {
        todos: state.visitSaleOptions.todos,
        inputValue: event.target.value,
      },
    });
  }

  const { todos } = state.visitSaleOptions;
  
  return (
    <div>
      <Box>
        <Stack  direction="row" 
      justifyContent="space-between"
      alignItems="center">
          <NormalCard
          title= {"Todo"}
          body={<div>
            
            <form >
              <input 
                  style={{marginRight:"20px", height:"34px",minWidth:"300px"}}
                  type="text" 
                  
                  placeholder="What do you need to do today?" 
                  value={state.visitSaleOptions.inputValue} 
                  onChange={inputChangeHandler}
                  required />
              <CustomButton
                type="submit"
                title="Ajouter"
                backgroundColor="#475be8"
                color="#fcfcfc"
                handleClick={()=>addTodo()}
              />
            </form>
            <div>
                <div style={{justifyContent:"center", marginLeft:"10px",marginTop:"30px"}}>
                    {state.visitSaleOptions.todos.map((todo, index) =>{
                        return <ListItem 
                        checked={todo.isCompleted}
                        changed={() => statusChangedHandler(index+1)}
                        key={todo.id}
                        remove={() => removeTodo(index+1)}
                         
                        >{todo.task}</ListItem>
                    })}
                </div>
            </div>
          </div>}
          backgroundColor= "white"
          color='black'

          />
        </Stack>
      </Box>
   </div>
  )
  
}


export default ToDoList