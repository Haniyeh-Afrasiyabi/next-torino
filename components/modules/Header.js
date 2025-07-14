import { createContext, useReducer } from "react";
import SignIn from "../icons/SignIn";
import LoginModal from "./LoginModal";

export const LoginContext = createContext();

const initialState = {
  loginModal: { show: false },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ShowLoginModal":
      return { ...state, loginModal: { show: true } };
    case "CloseLoginModal":
      return{...state, loginModal:{show:false}}  
  }
};

function Header() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      <div>
        <div
          onClick={() => {
            dispatch({ type: "ShowLoginModal" });
          }}
        >
          <SignIn />
        </div>
        <LoginModal />
      </div>
    </LoginContext.Provider>
  );
}

export default Header;
