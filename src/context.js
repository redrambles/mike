import React, {useState, useContext} from 'react';
import { clients as clientData, projects as projectData} from './data.js'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [clients, setClients] = useState(clientData);
  const [projects, setProjects] = useState(projectData);


  return (
    <AppContext.Provider value={{clients, setClients, projects, setProjects}}>
      {children}
    </AppContext.Provider>
  )

}


export const useAppContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}