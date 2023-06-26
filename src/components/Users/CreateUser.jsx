import Card from 'components/UI/Card';
import { Form, Label, Button, Input } from './CreateUser.styled';

const CreateUser = props => {
  const createUserHandler = event => {
    event.preventDefault();
  };

  return (
    <Card>
      <Form onSubmit={createUserHandler}>
        <Label htmlFor="name">Имя</Label>
        <Input id="name" type="text" />
        <Label htmlFor="age">Возраст</Label>
        <Input id="age" type="number" />
        <Button type="submit">Добавить Пользователя</Button>
      </Form>
    </Card>
  );
};

export default CreateUser;
