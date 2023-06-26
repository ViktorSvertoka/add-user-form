import { Wrapper, List } from './UserList.styled';

const UserList = props => {
  return (
    <Wrapper>
      <List>
        {props.users.map(user => (
          <li key={user.id}>
            {user.name} - {user.age} лет
          </li>
        ))}
      </List>
    </Wrapper>
  );
};

export default UserList;
