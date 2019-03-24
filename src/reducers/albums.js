const albums = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ALBUM':
        return [
          ...state,
          {
            id: action.id,
            name: action.name,
            cover: action.cover,
          }
        ]
      default:
        return state
    }
  }
  
  export default albums