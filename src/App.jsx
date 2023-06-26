import CreateUser from 'components/Users/CreateUser';
import UserList from 'components/UserList/UserList';

const App = () => {
  return (
    <div>
      <CreateUser />
      <UserList users={[]} />
    </div>
  );
};

export default App;
