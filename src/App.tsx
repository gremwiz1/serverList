import React, { useState } from 'react';
import './App.scss';
import ServerList from './components/serverList';
import EditServerForm from './components/editServerForm';
import { mockServers, ServerModel } from './models/serverModel';

const App: React.FC = () => {
  const [servers, setServers] = useState<ServerModel[]>(mockServers);
  const [selectedServer, setSelectedServer] = useState<ServerModel | null>(null);

  const handleSelectServer = (server: ServerModel) => {
    setSelectedServer(server);
  };

  const handleSaveServer = (updatedServer: ServerModel) => {
    setServers(servers.map(server => server.customer_id === updatedServer.customer_id ? updatedServer : server));
    setSelectedServer(null);
  };

  return (
    <div className="app">
      <div className="server-list">
        <ServerList servers={servers} onSelect={handleSelectServer} />
      </div>
      <div className="edit-form">
        {selectedServer && <EditServerForm server={selectedServer} onSave={handleSaveServer} />}
      </div>
    </div>
  );
};

export default App;
