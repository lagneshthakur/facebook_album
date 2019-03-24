const photos = (state = [], action) => {
    switch (action.type) {
      case 'ADD_PHOTO':
          return [
            ...state,
            {
              id: action.id,
              name: action.name,
              cover: action.cover,
            }
          ]

        case 'CLEAR_PHOTO':
          return []

        default:
          return state
      }
    }
    
export default photos