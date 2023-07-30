import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "User Context",
    email: "gaurav@mail.com",
  },
});

UserContext.displayName = " UserContext";

// By default React dev tool show Context.Provider so you have a
//give a name  for the debugging

export default UserContext;
