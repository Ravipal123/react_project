import { createContext } from 'react';
import Component1 from './context/Component1';

const FirstName = createContext()
const LastName = createContext()

function App() {
  return (
    <>
      <FirstName.Provider value={"Ravi"}>
        <LastName.Provider value={"Kumar"}>
        <Component1/>
        </LastName.Provider>
      </FirstName.Provider>
    </>
  );
}

export default App;
export {FirstName};
export {LastName};
