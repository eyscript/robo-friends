import React from 'react';

const SearchBox=({onChange, onClick})=>{

	return (
		<div>
		<input placeholder="search robots" onChange={onChange} onClick={onClick(e)}/>
		</div>
		);
}


export default SearchBox;