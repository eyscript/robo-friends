import React from 'react';
import CardList from '../components/CardList';
//import {robots} from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import {connect} from 'react-redux';
import {SetSearchField, requestRobots} from '../action.js'

const mapStateToProps=(state)=>{
	console.log(state)
	return {
		searchField: state.searchRobots.searchField, 
		robots: state.requestRobots.robots,		
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error	}
}
const mapDispatchToProps=(dispatch)=>{
return {

onSearchChange: (event)=>dispatch(SetSearchField(event.target.value)),
onRequestRobots:()=>dispatch(requestRobots())

}
}
class App extends React.Component{


onClick=(e)=>{
	console.log(e)
}
componentDidMount(){
this.props.onRequestRobots();
}


	render(){
const {searchField, onSearchChange, robots, isPending}=this.props;
		const filteredrobots=this.props.robots.filter((robot, i)=>{
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return(
		<div className='tc'>
			<h1>RoboFriends</h1>
			<SearchBox onChange={onSearchChange} onClick={this.onClick}/>
			<Scroll>
			{(isPending)?<h2>Loading</h2>:<CardList robots={filteredrobots}/>}
			</Scroll>
		</div>
		)
}
}
export default connect(mapStateToProps, mapDispatchToProps)(App);