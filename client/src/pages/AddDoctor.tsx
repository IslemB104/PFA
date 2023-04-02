import React from 'react';
import { Option } from "antd/es/mentions";
import {
  Form,
  Input,
  InputNumber,
  Select,
  Modal,
  DatePicker,
} from 'antd';

interface Values {
  title: string;
  description: string;
  modifier: string;
}

interface AddCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const AddDoctor: React.FC<AddCreateFormProps> = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Ajouter Doctor"
      okText="Ajouter"
      cancelText="Annuler"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        //layout="vertical"
        name="add_Doc"
        style={{ maxWidth: 600 }}
      scrollToFirstError
      >
        <Form.Item id='1' name="code_Doc" label="code Docteur" rules={[{ required: true },{ pattern: /^\d{6}$/, message: 'Please enter a 6-digit number' }]}>
      <Input />
    </Form.Item>
    </Form>
    </Modal>
  )
}

export default AddDoctor