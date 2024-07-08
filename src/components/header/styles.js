import styled from "styled-components";

export const Container = styled.div`
  background-color: #191919;
  color: #FFFFFF;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 7vh;
  padding: 0 220px;
`;

export const HeaderOptions = styled.div`
    display: flex;
    align-items: center;
    gap: 50px;
    `;  


export const TextHeader = styled.p`
    cursor: pointer;

    &:hover {
        color: #55CCA2;
    }
`;


export const SignUpButton = styled.button`
  background-color: #55CCA2;
  color: #FFFFFF;
  font-size: 1rem;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #3E927D;
  }
`;
