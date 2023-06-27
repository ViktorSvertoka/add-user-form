import {
  Backdrop,
  Modal,
  Header,
  Title,
  Action,
  Button,
  Message,
  Wrapper,
} from './ErrorModal.styled';

const ErrorModal = props => {
  return (
    <div>
      <Backdrop onClick={props.onCloseModal}></Backdrop>

      <Modal>
        <Header>
          <Title>{props.title}</Title>
        </Header>
        <Wrapper>
          <Message>{props.message}</Message>
          <Action>
            <Button onClick={props.onCloseModal} type="button">
              Закрити
            </Button>
          </Action>
        </Wrapper>
      </Modal>
    </div>
  );
};

export default ErrorModal;
