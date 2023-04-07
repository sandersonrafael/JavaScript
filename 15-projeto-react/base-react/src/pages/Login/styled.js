import styled from 'styled-components';

export const Title = styled.h1`
    color: ${(props) => (props.isRed ? 'red' : 'blue')};
    background-color: black;
    small {
        font-size: 12pt;
        margin-left: 15px;
        color: #999;
    }
`;
export const Paragrafo = styled.p`
    color: green;
    font-size: 30px;
`;
