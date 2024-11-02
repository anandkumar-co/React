// import { useState } from "react";
import Login from "./component/Login";
import Profile from "./component/Profile";
import UsercontextProvider from "./context/usercontextProvider";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <UsercontextProvider>
      <Login />
      <Profile />
    </UsercontextProvider>
  );
}

export default App;
