import styled from "styled-components";

interface BigTextStyledProps {
  backgroundColor?: string;
  colorCont?: string;
  heighCont?: string;
}

export const Container = styled.div<BigTextStyledProps>`
  height: ${props => props.heighCont || '113vh'};
  color: ${props => props.colorCont || 'white'};
  background-color: ${props => props.backgroundColor || '#062400'};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  height: 10%;
  display: flex;
  align-items: end;
`;

export const Text = styled.div`
  height: 90%;
  width: 80%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center; 
  text-align: center; 
  margin: 0 auto;
  line-height: 1.5; 
  color: #ffffff;
`;

