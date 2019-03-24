const user = (state = [], action) => {
    switch (action.type) {
      case 'SET_USER':
          return [
            ...state,
            {
              id: action.id,
              name: action.name,
              cover: action.cover
            }
          ]
      case 'REMOVE_USER':
          debugger
          return []
        
        default:
          return state
      }
    }
    
export default user