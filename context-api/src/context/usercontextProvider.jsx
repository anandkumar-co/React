import { useState } from "react";
import userContext from "./usercontext";
const UsercontextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};
export default UsercontextProvider;
