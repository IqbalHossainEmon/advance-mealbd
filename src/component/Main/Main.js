import React, {useEffect, useState} from "react";
import DisplayMeals from "../DisplayMeals/DisplayMeals";
import "./Main.css";

const Main = () => {
	const [meals, setMeals] = useState([]);
	const [names, setName] = useState([]);
	const [search, setSetsearch] = useState("");
	const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + search;
	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setMeals(data.meals));
	}, [search]);
	const handleClick = strMeal => {
		setName([...names, strMeal]);
	};
	const handleSearch = event => {
		const searchText = event.target.value;
		setSetsearch(searchText);
	};
	let food;
	if (meals) {
		food = meals;
	} else {
		food = [];
	}
	return (
		<>
			<div className='search-container'>
				<input
					type='text'
					placeholder='type to search'
					onChange={handleSearch}
				/>
			</div>
			<div className='meals-container'>
				<div className='meal-container'>
					{food.map(meal => (
						<DisplayMeals
							key={meal.idMeal}
							strMeal={meal.strMeal}
							strInstructions={meal.strInstructions}
							img={meal.strMealThumb}
							btn={handleClick}
						/>
					))}
				</div>
				<div className='cart'>
					<h3>Added Meals:</h3>
					<ol>
						{names.map(name => (
							<li key={name}>{name}</li>
						))}
					</ol>
				</div>
			</div>
		</>
	);
};

export default Main;
