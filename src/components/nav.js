import {React, useState} from "react";
// Styling and animation
import styled from 'styled-components';
import {motion} from 'framer-motion';
import logo from "../img/logo.svg";
// Redux and route
import {fetchSearch} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';
// animations
import { fadeIn } from "../animations";

const Nav = () => {
    const dispatch = useDispatch();
    const [textInput,setTextInput] = useState('');
    const inputHandler = (e) => {
        setTextInput(e.target.value);
    };
    const submitSearch = (e) => {
        e.preventDefault();
        dispatch(fetchSearch(textInput));
        setTextInput('');
    }
    const clearSearched = () => {
        dispatch({type: "CLEAR_SEARCHED"})
    }
    return(
        <StyledNav variants={fadeIn} initial='hidden' animate="show">
            <Logo onClick={clearSearched}>
                <img src={logo} alt="logo" />
                <h1>React API</h1>
            </Logo>
            <form className="search">
                <input value={textInput} type="text" onChange={inputHandler} />
                <button onClick={submitSearch} type="submit" >Search</button>
            </form>
        </StyledNav>
    );
}
const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input {
        width: 30%;
        font-size: 1.5rem;
        padding: 0.5rem;
        border: none;
        margin-top: 1rem;
        box-shadow: 0 0 30px rgba(0,0,0,0.1);
        outline: 2px solid darkcyan;
    }
    button {
        font-size: 1.5rem;
        border: none;
        padding: 0.5rem 2rem;
        cursor: pointer;
        background: #ff7676;
        color: #fff;
        outline: 2px solid pink;
        margin-left: 1rem;
    }
`;

const Logo = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 1rem;
    cursor: pointer;
    img {
        height: 2rem;
        width: 2rem;
    }
`;
export default Nav;