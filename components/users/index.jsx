import {useAppContext} from "../../context";

const Users = () => {
  const { user } = useAppContext();

  return (
    <>
      <p>The users page</p>
      <pre>{JSON.stringify(user, false, 2)}</pre>
    </>
  );
};

export default Users;
