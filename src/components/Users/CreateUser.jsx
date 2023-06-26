import React, { useState } from 'react';
import Card from 'components/Card/Card';
import { Form, Label, Button, Input } from './CreateUser.styled';

const CreateUser = props => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');

  const createUserHandler = event => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      return;
    }

    if (+inputAge < 1) {
      return;
    }

    console.log(inputName, inputAge);
    props.onCreateUser(inputName, inputAge);
    setInputName('');
    setInputAge('');
  };

  const nameChangeHandler = event => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = event => {
    setInputAge(event.target.value);
  };

  return (
    <Card>
      <Form onSubmit={createUserHandler}>
        <Label htmlFor="name">Имя</Label>
        <Input
          id="name"
          type="text"
          onChange={nameChangeHandler}
          value={inputName}
        />
        <Label htmlFor="age">Возраст</Label>
        <Input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={inputAge}
        />
        <Button type="submit">Добавить Пользователя</Button>
      </Form>
    </Card>
  );
};

export default CreateUser;
