import React, { useState, useContext } from "react";
import { clients as clientData, projects as projectData } from "./data.js";
const AppContext = React.createContext({} as ReturnType<typeof useValue>);

interface Client {
  id: number;
  name: string;
  type: string;
  description: string;
  mission?: string;
}

interface Project {
  id: number;
  name: string;
  client: string;
}

const useValue = () => {
  const [clients, setClients] = useState<Client[]>(clientData);
  const [projects, setProjects] = useState<Project[]>(projectData);

  const addClient = ({ name, type, description }) => {
    const newClient = {
      id: Date.now(),
      name: name,
      type: type,
      description: description
    };
    setClients([newClient, ...clients]);
  };

  const updateClient = (clientId, updatedName, updatedType, updatedDescription) => {
    const updatedClients = clients.map((client) => {
      if (client.id !== clientId) {
        return client;
      } else {
        return { ...client, name: updatedName, type: updatedType, description: updatedDescription };
      }
    });
    setClients(updatedClients);
  };

  const addProject = ({ name, client }) => {
    const newProject = {
      id: Date.now(),
      name: name,
      client: client
    };
    setProjects([...projects, newProject]);
  };

  const updateProject = (projectId, updatedName, updatedClient) => {
    const updatedProjects = projects.map((project) => {
      if (project.id !== projectId) {
        return project;
      } else {
        return { ...project, name: updatedName, client: updatedClient };
      }
    });
    setProjects(updatedProjects);
  };

  const deleteResource = (resource, resourceId) => {
    if (resource === "client") {
      const newClients = clients.filter((client) => {
        return client.id !== resourceId;
      });
      setClients(newClients);
    } else if (resource === "project") {
      const newProjects = projects.filter((project) => {
        return project.id !== resourceId;
      });
      setProjects(newProjects);
    } else {
      console.log("Could not delete resource.");
    }
  };

  return { clients, setClients, projects, setProjects, addProject, addClient, updateClient, updateProject, deleteResource };
};

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={useValue()}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
