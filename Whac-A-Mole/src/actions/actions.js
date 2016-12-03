
export function Generate_Mouse(){
  return {
    type:"Generate_Mouse",
  }
}

export function Game_Over(){
  return {
    type:"Game_Over",
  }
}

export function Beat_Mouse(index){
  return{
    type:"Beat_Mouse",
    index
  }
}
