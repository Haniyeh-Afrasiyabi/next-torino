import { createContext, useReducer } from "react";
import SignIn from "../icons/SignIn";
import LoginModal from "./LoginModal";
import LoginCodeModal from "./LoginCodeModal";
import Cookies from "js-cookie";

const userCookie = Cookies.get("user");
const user = userCookie ? JSON.parse(userCookie) : null;

export const LoginContext = createContext();

const initialState = {
  loginModal: { show: false },
  loginCodeModal: { show: false },
  mobile: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ShowLoginModal":
      return { ...state, loginModal: { show: true } };
    case "CloseLoginModal":
      return { ...state, loginModal: { show: false } };
    case "ShowLoginCodeModal":
      return {
        ...state,
        loginCodeModal: { show: true },
        mobile: action.payload,
      };
    case "CloseLoginCodeModal":
      return { ...state, loginCodeModal: { show: false } };
  }
};

function Header() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      <div>
        {user ? (
          <span>{user.mobile}</span>
        ) : (
          <div onClick={() => dispatch({ type: "ShowLoginModal" })}>
            <SignIn />
          </div>
        )}

        <LoginModal />
        <LoginCodeModal />
      </div>
    </LoginContext.Provider>
  );
}

export default Header;
