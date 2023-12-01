import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import CardCharacters from "../component/CardCharacters";
import CardPlanets from "../component/CardPlanets";
import CardStarships from "../component/CardStarships";

export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-center mt-5 container">
			<div >
				<h3 className='titulo'>Characters</h3>
				<div className="d-flex lista">
					{store.characters && store.characters.map((character,index) => {
						return <CardCharacters key={character.uid} character={character} />
					
					})}
				</div>
			</div>
			<div >
				<h3 className='titulo'>Planets</h3>
				<div className="d-flex lista">
					{store.planets && store.planets.map((planets,index) => {
						return <CardPlanets key={planets.uid} planets={planets} />

					})}
				</div>
			</div>
			<div>
				<h3 className="titulo">Starships</h3>
				<div className="d-flex lista">
					{console.log(store.starships)}
					{store.starships && store.starships.map((starships,index)=>{
						return <CardStarships key={starships.uid} starships={starships}/>
					})}
				</div>
			</div>
		</div>
	)
};
