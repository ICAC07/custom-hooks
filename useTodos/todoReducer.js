
export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'Add':
        return [...initialState, action.payload]
    case 'Delete':
        return initialState.filter(item => item.id != action.payload);
    case 'Done':
        return initialState.map(item => { 
            if(item.id === action.payload){
                 return {
                    ...item,
                    done : !item.done
                 }
            }

            return item;
        });
    
    default:
        initialState;
  }
}
