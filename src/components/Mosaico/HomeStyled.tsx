import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #062400;
  position: relative;
  overflow: hidden;
`;

export const NonagonButton = styled.div`
  width: 100px;
  height: 100px;
  background-color: gray;
  clip-path: polygon(
    50% 0%,
    78% 18%,
    98% 50%,
    78% 82%,
    50% 100%,
    22% 82%,
    2% 50%,
    22% 18%
  );
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

export const TiledShapesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Tile = styled.div`
  position: absolute;
  background-size: cover;
  background-position: center;
  clip-path: polygon(
    50% 0%,
    100% 25%,
    100% 75%,
    50% 100%,
    0% 75%,
    0% 25%
  );
`;
