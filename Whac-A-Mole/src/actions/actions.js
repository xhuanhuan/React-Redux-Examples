export const Add_Todo='ADD_TODO';
export const Toggle_Todo='TOGGLE_TODO';
export const set_Visibility_Filter='SET_VISIBILITY_FILTER';

export const Visibility_Filter={
  Show_All:'Show_All',
  Show_Active:'Show_Active',
  Show_completed:'Show_Completed'
}


export function AddTodos(text){
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
