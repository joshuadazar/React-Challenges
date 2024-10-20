import { useState } from 'react';
import '@/scss/_UserList.scss';

function UserList() {
  const [inputVal, setInputVal] = useState('');
  const [userList, setUserList] = useState([
    'juan',
    'pedro',
    'miguel',
    'Sophia',
    'claudia',
  ]);

  const List = () => {
    return (
      <section className="user-list">
        <ul>
          {userList.map(
            (name, index) =>
              name.toLowerCase().includes(inputVal.toLowerCase()) && (
                <li key={index}>{name}</li>
              )
          )}
        </ul>
      </section>
    );
  };

  return (
    <>
      <input
        value={inputVal}
        type=" text"
        placeholder="digita nombre"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <List />
    </>
  );
}

export default UserList;
