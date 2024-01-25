import React from 'react';
import { ServerModel } from '../models/serverModel';
import { List } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import './serverList.scss';

interface ServerListProps {
  servers: ServerModel[];
  onSelect: (server: ServerModel) => void;
}

const ServerList: React.FC<ServerListProps> = ({ servers, onSelect }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={servers}
      renderItem={server => (
        <List.Item
          key={server.customer_id}
          actions={[
            <EditOutlined key="edit" onClick={() => onSelect(server)} />
          ]}
          className="list-item"
        >
          <List.Item.Meta
            title={server.server_name}
            description={`Type: ${server.server_type}`}
          />
        </List.Item>
      )}
    />
  );
};

export default ServerList;
