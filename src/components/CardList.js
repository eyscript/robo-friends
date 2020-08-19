import React from 'react';
import Card from '../components/Card';

const CardList=(props)=>{
return(
	<div>
		{
		props.robots.map((user,i)=>{
		return <Card key={props.robots[i].id} id={props.robots[i].id} name={props.robots[i].name} email={props.robots[i].email}/>
	   })
		}
	</div>
	);		 

	}


export default CardList;