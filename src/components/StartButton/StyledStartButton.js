import styled from "styled-components";

export const StyledStartButton = styled.div`
    box-sizing: border-box;
    margin: 0 0 20px 0;
    padding: 20px;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    border: none;
    color: white;
    background: #333;
    font-family: Pixel, Arial, sans-serif;
    font-size: 1rem;
    outline: 0;
    cursor: pointer;
    
    @media(max-width: 767px) {
        font-size: 0.7rem;
        padding: 12px;
        border-radius: 15px;
        margin: 0 0 10px;
    }

    @media(max-width: 575px) {
        font-size: 0.4rem;
        padding: 7px;
        border-radius: 9px;
        border-width: 2px;;
        min-height: auto;
     }
`;