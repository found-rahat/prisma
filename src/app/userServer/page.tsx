import Menu from "./../menu";
type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
};

export default async function userServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  console.log(users);

  return (
    <>
      <Menu />
      <h1>User Server Client</h1>
      <ul>
        {users.map((user) => (
          <li
            key={user.id}
            className="p-4 bg-white shadow-md rounded-lg text-gray-700 mb-2"
          >
            <div className="font-bold">{user.name}</div>
            <div className="text-sm">
              <div>Username: {user.username}</div>
              <div>Email: {user.email}</div>
              <div>Phone: {user.phone}</div>
              <div>Website: {user.website}</div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
