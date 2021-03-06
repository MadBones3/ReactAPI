import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from '../actions/gamesAction';
// Styling and animation
import styled from 'styled-components';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
// Components
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router";
// animations
import { fadeIn } from "../animations";


const Home = () => {
    // get the current Location
    const location = useLocation();
    const pathID = location.pathname.split("/")[2];

    // FETCH GAMES
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadGames());
    }, [dispatch]);
    // retirve data
    const {popular, newGames, upcoming, searched} = useSelector((state) => state.games);

// <AnimatePresence> must be between a toggle - so click to open popup
    
    return(
        <GameList variants={fadeIn} initial="hidden" animate="show">
            <AnimateSharedLayout type="crossfade">
                <AnimatePresence>{pathID && <GameDetail pathID={pathID}/>}</AnimatePresence>
                {searched.length ? (
                <div className="searched">
                    <h2>Searched games</h2>
                    <Games>
                        {searched.map(game=>(
                            <Game 
                                name={game.name} 
                                released={game.released} 
                                id={game.id} 
                                image={game.background_image} 
                                key={game.id}
                            />
                        ))}
                    </Games>
                </div>
                ) : (
                    ""
                )}
                <h2>Upcoming games</h2>
                <Games>
                    {upcoming.map(game=>(
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id} 
                            image={game.background_image} 
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>Popular games</h2>
                <Games>
                    {popular.map(game=>(
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id} 
                            image={game.background_image} 
                            key={game.id}
                        />
                    ))}
                </Games>
                <h2>New games</h2>
                <Games>
                    {newGames.map(game=>(
                        <Game 
                            name={game.name} 
                            released={game.released} 
                            id={game.id} 
                            image={game.background_image} 
                            key={game.id}
                        />
                    ))}
                </Games>
            </AnimateSharedLayout>
        </GameList>
    );
}

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;
const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-gap: 5rem 3rem;

`;

export default Home;