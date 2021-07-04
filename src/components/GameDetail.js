import React from "react";
// Styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion'; 
//Redux
import { useSelector } from "react-redux";
import Game from "./Game";

const GameDetail = () => {
    // Data
    const {game, screen} = useSelector((state) => state.detail);
    return(
        <CardShadow>
            <Detail>
                <div className="stats">
                    <div className="rating">
                        <h3>{Game.name}</h3>
                        <p>Rating: {game.rating} </p>
                    </div>
                    <div className="info">
                        <h2>Platforms</h2>
                        <div className="platforms">
                            {game.platforms && game.platforms.map(data=>(
                                <h3 key={data.platform.id}>{data.platform.name}</h3>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="media">
                    <img src={game.background_image} alt={game.background_image} />
                </div>
                <div className="description">
                    <p>{game.description_raw}</p>
                </div>
                <div className="gallery">
                    {game.platforms && screen.results.map(screen=>(
                        <img src={screen.image} key={screen.id} alt={screen.image}/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
    );
}

const CardShadow = styled(motion.div)`
    width: 100%;
    min-height: 100vh;
    overflow-y: scroll;
    background: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    &::-webkit-scrollbar{
        width: 0.5rem;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #db5269;
    }
    &::-webkit-scrollbar-track{
        background: #fff;
    }
`;

const Detail = styled(motion.div)`
    width: 80%;
    border-radius: 1rem;
    padding: 2rem 20rem;
    background: #fff;
    position: absolute;
    left: 10%;
    color: #000;
    img {
        width: 100%;
    }
`;


export default GameDetail;