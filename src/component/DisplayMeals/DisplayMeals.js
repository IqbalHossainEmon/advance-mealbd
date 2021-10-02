import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import "./DisplayMeals.css";

const DisplayMeals = props => {
	const {img, strMeal, strInstructions} = props;
	return (
		<div className='meal'>
			<img src={img} alt='' />
			<h3>{strMeal}</h3>
			<button onClick={() => props.btn(strMeal)} className='btn'>
				<FontAwesomeIcon icon={faPlus} />
				<span style={{marginLeft: "5px"}}>Click</span>
			</button>
			<p className='inst'>{strInstructions}</p>
		</div>
	);
};

export default DisplayMeals;
