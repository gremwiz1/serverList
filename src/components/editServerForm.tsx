import React from 'react';
import { ServerModel } from '../models/serverModel';
import { Input, Select, Button, Form } from 'antd';
import './editServerForm.scss';

const { Option } = Select;

interface EditServerFormProps {
  server: ServerModel;
  onSave: (server: ServerModel) => void;
}

const EditServerForm: React.FC<EditServerFormProps> = ({ server, onSave }) => {
  const [form] = Form.useForm();

  React.useEffect(() => {
    if (server) {
      form.setFieldsValue(server);
    } else {
      form.resetFields();
    }
  }, [server, form]);

  const handleSubmit = (values: Omit<ServerModel, 'customer_id'>) => {
    const updatedServer = { ...values, customer_id: server.customer_id };
    onSave(updatedServer);
  };
  

  return (
    <Form
      form={form}
      layout="vertical"
      onFinish={handleSubmit}
      className="edit-form"
      initialValues={server || { server_name: '', server_type: '' }}
    >
      <Form.Item
        label="Server Name"
        name="server_name"
        className="form-item"
        rules={[{ required: true, message: 'Please input the server name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Server Type"
        name="server_type"
        className="form-item"
        rules={[{ required: true, message: 'Please select the server type!' }]}
      >
        <Select>
          <Option value="vds">VDS</Option>
          <Option value="dedicated">Dedicated</Option>
          <Option value="hosting">Hosting</Option>
        </Select>
      </Form.Item>
      <Form.Item className="form-item">
        <Button type="primary" htmlType="submit" className="submit-button">
          Сохранить
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EditServerForm;
