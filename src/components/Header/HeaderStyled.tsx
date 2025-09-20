import styled from "styled-components";

export const Container = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: #141c16;
  z-index: 211;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    height: 4.5rem;
  }
`;

export const ElementsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const ContainerContato = styled.div`
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-decoration: underline;
`;

export const Element = styled.div<{ isActive: boolean }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${({ isActive }) => (isActive ? "80%" : "60%")};
  width: auto;

  transition: height 0.3s ease;
  cursor: pointer;

  @media (max-width: 768px) {
    height: ${({ isActive }) => (isActive ? "85%" : "65%")};
  }

  &:hover {
    height: ${({ isActive }) => (isActive ? "85%" : "65%")};
  }
`;

export const StyledImg = styled.img<{ isActive: boolean }>`
  height: 100%;
  width: auto;
  object-fit: contain;
  transition: filter 0.3s ease;

  filter: ${({ isActive }) =>
    isActive ? "none" : "grayscale(100%) brightness(60%)"};
`;
