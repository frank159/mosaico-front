import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
`;

export const ContentContainer = styled.div`
 height: 100%;
 width: 100%;

 display: flex;
 justify-content: space-around;
 align-items: center;
`;

export const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: 40vw;
  justify-content: center;
  `;

export const RightContent = styled.div`
  height: 100vh;
  width: 53vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  box-sizing: border-box;
`;

export const ImageFrame = styled.div`
  height: 70vh;
  background-color: transparent;
  border: 1px solid white;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 10px;
  box-sizing: border-box; 
`;

export const Title = styled.text`
  width: 95%;
  font-size: 40px;
  font-weight: bold;
  padding: 30px 30px 0 30px;
  color: #F8F6E6;
`;

export const TitleSmall = styled.h3`
  width: 70%;
  padding: 30px 30px 0 30px;
  color: #F8F6E6;
`;

export const Text = styled.text`
  width: 95%;
  padding: 0 30px 30px 30px;
  color: #F8F6E6;
  font-size: 18px;

`;

export const TopicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Topics = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  width: 50%;
`;