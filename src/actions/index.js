export const addAlbum = album => ({
  type: 'ADD_ALBUM',
  id: album.id,
  name: album.name,
  cover: album.cover
})

export const addPhoto = photo => ({
  type: 'ADD_PHOTO',
  id: photo.id,
  name: photo.name,
  cover: photo.cover
})

export const setUser = user => ({
  type: 'SET_USER',
  id: user.id,
  name: user.name,
  cover: user.picture.data.url
})

export const removeUser = user => ({
  type: 'REMOVE_USER'
})