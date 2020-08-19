import {CHANGE_SEARCH_FIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS, REQUEST_ROBOTS_FAILED} from './constants.js';
const initialStateSearch={
	searchField:''
}
export const searchRobots=(state=initialStateSearch, action={})=>{
console.log(state)
switch(action.type){
case CHANGE_SEARCH_FIELD:
    return Object.assign({}, state, {searchField:action.payload});
    
 default:
        return state;
    }
    console.log(state)
}

const initialStateRobots={
    isPending:true,
    error:'',
    robots:[]
}
export const requestRobots=(state=initialStateRobots, action={})=>{
    switch(action.type){
        case REQUEST_ROBOTS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_ROBOTS_SUCCESS:
            return Object.assign({}, state, {isPending:false, robots:action.payload})
        case REQUEST_ROBOTS_FAILED:
            return Object.assign({}, state, {isPending:false, error:action.payload})
        default:
            return state;
    }
}