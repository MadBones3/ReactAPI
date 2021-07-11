import React from "react";
// Styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion'; 
//Redux
import { useSelector } from "react-redux";
import Game from "./Game";
import { useHistory } from "react-router";
import { smallImage } from "../util";
// images
import playstation from '../img/playstation.svg';
import steam from '../img/steam.svg';
import xbox from '../img/xbox.svg';
import nintendo from '../img/nintendo.svg';
import apple from '../img/apple.svg';
import gamepad from '../img/gamepad.svg';
import starEmpty from '../img/star-empty.png';
import starFull from '../img/star-full.png';

const GameDetail = (pathID) => {
    const history = useHistory();
    const pathIDString = pathID.pathID;
    // Exit detail
    const exitDetailHandler = (e) => {
        const element = e.target;
        if(element.classList.contains('shadow')){
            document.body.style.overflow = 'auto';
            history.push('/');
        }
    }
    // get stars
    const getStars = () => {
        const stars = [];
        const rating = Math.floor(game.rating);
        for(let i=1; i<=5; i++) {
            if(i<=rating){
                stars.push(<img alt="star" key={i} src={starFull} />)
            } else {
                stars.push(<img alt="star" key={i} src={starEmpty} />)
            }
        }
        return stars;
    }

    // get platform images
    const getPlatform = (platform) => {
        switch(platform){
            case "PlayStation 4":
                return playstation;
              case "PlayStation 5":
                return playstation;
              case "Xbox Series S/X":
                return xbox;
              case "Xbox S":
                return xbox;
              case "Xbox One":
                return xbox;
              case "PC":
                return steam;
              case "Nintendo Switch":
                return nintendo;
              case "iOS":
                return apple;
              default:
                return gamepad;
        }
    }

    // Data
    const {game, screen, isLoading} = useSelector((state) => state.detail);
    return(
        <>
        {!isLoading && (
        <CardShadow className="shadow" onClick={exitDetailHandler}>
            <Detail layoutId={pathIDString}>
                <Stats>
                    <div className="rating">
                        <motion.h3 layoutId={`title ${pathID}`}>{game.name}</motion.h3>
                        <p>Rating: {game.rating} </p>
                        {getStars()}
                    </div>
                    <Info>
                        <h2>Platforms</h2>
                        <Platforms>
                            { game.platforms.map(data=>(
                                <img key={data.platform.id} src={getPlatform(data.platform.name)} alt={data.platform.name} title={data.platform.name}/>
                            ))}
                        </Platforms>
                    </Info>
                </Stats>
                <Media>
                    <motion.img layoutId={`image ${pathID}`} src={smallImage(game.background_image, 1280)} alt={game.background_image} />
                </Media>
                <Description>
                    <p>{game.description_raw}</p>
                </Description>
                <div className="gallery">
                    {game.platforms && screen.results.map(screen=>(
                        <img src={smallImage(screen.image, 1280)} key={screen.id} alt={screen.image}/>
                    ))}
                </div>
            </Detail>
        </CardShadow>
        )}
        </>
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
    z-index: 2;
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
    padding: 2rem 5rem;
    background: #fff;
    position: absolute;
    left: 10%;
    color: #000;
    img {
        width: 100%;
    }
`;

const Stats = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
        width: 2rem;
        height: 2rem;
        display: inline-block;
    }
`;

const Info = styled(motion.div)`
    text-align: center;
`;

const Platforms = styled(motion.div)`
    display: flex;
    justify-content: space-evenly;
    img {
        margin-left: 3rem;
    }
`;

const Media = styled(motion.div)`
    margin-top: 5rem;
    img {
        width: 100%;
    }
`;

const Description = styled(motion.div)`
    padding: 5rem 0rem;
`;




export default GameDetail;