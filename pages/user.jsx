import ContextProvider from "../context";
import Users from "../components/users";

const UsersPage = () => {
  return(
    <ContextProvider>
      <Users />
    </ContextProvider>
  )
}

export default UsersPage;
