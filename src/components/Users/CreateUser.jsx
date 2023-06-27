import React, { useState } from 'react';
import Card from 'components/Card/Card';
import { Form, Label, Button, Input } from './CreateUser.styled';
import ErrorModal from 'components/ErrorModal/ErrorModal';

const CreateUser = props => {
  const [inputName, setInputName] = useState('');
  const [inputAge, setInputAge] = useState('');
  const [error, setError] = useState();

  const createUserHandler = event => {
    event.preventDefault();
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: 'Некоректне введення',
        message: 'Ці поля не можуть бути порожніми',
      });
      return;
    }

    if (+inputAge < 1) {
      setError({
        title: 'Некоректний вік',
        message: 'Вік має бути більше 0',
      });
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

  const errorHandler = () => {
    setError(false);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          onCloseModal={errorHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card>
        <Form onSubmit={createUserHandler}>
          <Label htmlFor="name">Ім'я</Label>
          <Input
            id="name"
            type="text"
            onChange={nameChangeHandler}
            value={inputName}
          />
          <Label htmlFor="age">Вік</Label>
          <Input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={inputAge}
          />
          <Button type="submit">Додати Користувача</Button>
        </Form>
      </Card>
    </div>
  );
};

export default CreateUser;
