import { Wrapper, List, Item } from './UserList.styled';

const UserList = props => {
  return (
    <Wrapper>
      <List>
        {props.users.map(user => (
          <Item key={user.id}>
            {user.name} - {user.age} років
          </Item>
        ))}
      </List>
    </Wrapper>
  );
};

export default UserList;
