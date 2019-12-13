import styled from "styled-components";

export const StyledDisplay = styled.div`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin: 0 0 20px 0;
    padding: 20px;
    border: 4px solid #333;
    min-height: 30px;
    width: 100%;
    border-radius: 20px;
    color: ${props => (props.gameOver ? "red" : "#999")};
    background: #000;
    font-family: Pixel, Arial, sans-serif;
    font-size: 0.8rem;
    
    @media(max-width: 767px) {
        font-size: 0.6rem;
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