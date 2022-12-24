import { GET_LOGIN, GET_DATA_SUCCESS } from "./actionTypes.js"


export const getLogin=(payload)=>({
     type:GET_LOGIN,
     payload
})

export const getDataSuccess=(payload)=>({
     type:GET_DATA_SUCCESS,
     payload
})