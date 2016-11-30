export const Add_Todo='Add_Todo';
export const Toggle_Todo='Toggle_Todo';
export const set_Visibility_Filter='set_Visibility_Filter';

export const Visibility_Filter={
  Show_All:'Show_All',
  Show_Active:'Show_Active',
  Show_completed:'Show_completed'
}


export function AddTodo(text){
  return {
    type:Add_Todo,
    text
  }
}

export function ToggleTodo(index){
  return {
    type:Toggle_Todo,
    index
  }
}

export function setVisibilityFilter(filter){
  return{
    type:set_Visibility_Filter,
    filter
  }
}
