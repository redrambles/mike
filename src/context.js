import React, { useState, useContext } from "react";
import { clients as clientData, projects as projectData } from "./data.js";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [clients, setClients] = useState(clientData);
	const [projects, setProjects] = useState(projectData);

	const addClient = ({ name, type, description }) => {
		const newClient = {
			id: Date.now(),
			name: name,
			type: type,
			description: description,
		};
		setClients([newClient, ...clients]);
	};

	const addProject = ({ name, client }) => {
		const newProject = {
			id: Date.now(),
			name: name,
			client: client,
		};
		setProjects([...projects, newProject]);
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

  const updateProject = (projectId, updatedName, updatedClient) => {
		const updatedProjects = projects.map((project) => {
			if (project.id !== projectId) {
				return project;
			} else {
				return { ...project, name: updatedName, client: updatedClient
       };
			}
		});
		setProjects(updatedProjects);
	};

  const deleteResource = (resource, resourceId) => {
    console.log('yo')
    if (resource === "client"){
        const newClients = clients.filter((client) => {
          return client.id !== resourceId
        })
        setClients(newClients)
    } else if (resource === "project"){
      const newProjects = projects.filter((project) => {
        return project.id !== resourceId
      })
      setProjects(newProjects)
    } else {
      console.log("Could not delete resource.")
    }
  }

	return (
		<AppContext.Provider value={{ clients, setClients, projects, setProjects, addProject, addClient, updateClient, updateProject, deleteResource }}>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
