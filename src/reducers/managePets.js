export let state;


export function managePets(state = {pets: []}, action){
  switch (action.type) {
    case "ADD_PET":
      return {...state, pets: [...state.pets, action.pet]}
      break;
    case "REMOVE_PET":
      return {...state, pets: [...state.pets].filter(pet => pet.id !== action.id)}
      break;
    default:
      return state;
  }
}

export function dispatch(action){
  state = managePets(state, action)
  render()
}

export function render(){
  const list = document.getElementById('container')
  list.innerHTML = `<ul>${state.pets.map(pet => `<li>${pet.name}</li>`)}</ul>`
}
