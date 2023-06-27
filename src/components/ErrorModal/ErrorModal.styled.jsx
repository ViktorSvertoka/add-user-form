import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

export const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 70%;
  z-index: 100;
  overflow: hidden;

  @media (min-width: 768px) {
    & {
      left: calc(50% - 25rem);
      width: 50rem;
    }
  }
`;

export const Header = styled.header`
  background-color: #00358b;
  padding: 2rem;
`;

export const Title = styled.h2`
  margin: 0;
  color: white;
`;

export const Wrapper = styled.div`
  background-color: #f0f3f6;
  padding: 2rem;
`;

export const Message = styled.p`
  padding: 2rem;
`;

export const Action = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  border-radius: 4px;
  border: 3px solid #00358b;
  color: #00358b;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
