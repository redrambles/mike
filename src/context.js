import React, {useState, useContext} from 'react';
import { clients as clientData, projects as projectData} from './data.js'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [clients, setClients] = useState(clientData);
  const [projects, setProjects] = useState(projectData);

  const addClient = ({name, type, description }) => {
    const newClient = {
      id: Date.now(),
      name: name,
      type: type,
      description: description,
    }
    setClients([newClient, ...clients])
  }

  return (
    <AppContext.Provider value={{clients, setClients, projects, setProjects, addClient}}>
      {children}
    </AppContext.Provider>
  )

}


export const useAppContext = () => {
  return useContext(AppContext)
}

export {AppContext, AppProvider}