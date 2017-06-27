import axios from 'axios';

export const addToCart = (item) => {
  return {
    type: 'ADD_ITEM', 
    item 
  }
}

export const removeFromCart = (item) => {
  return {
    type: 'REMOVE_ITEM',
    item
  }
}
