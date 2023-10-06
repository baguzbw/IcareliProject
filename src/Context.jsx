import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

export const MainContext = createContext();

const MainProvider = ({ children }) => {
  const [event, setEvent] = useState("2");

  return (
    <MainContext.Provider
      value={{
        event,
        setEvent,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

// Define the expected prop types for MainProvider
MainProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainProvider;
