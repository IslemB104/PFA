
import React from 'react';
import {
  Form,
  Input,
  Modal,
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

const AddPatient: React.FC<AddCreateFormProps> = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();
  return (
    <Modal
      open={open}
      title="Ajouter Docteur"
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
        name="add_Pat"
        style={{ maxWidth: 600 }}
      scrollToFirstError
      >
        <Form.Item id='2' name="code_Pat" label="code Patient" rules={[{ required: true },{ pattern: /^\d{6}$/, message: 'Please enter a 6-digit number' }]}>
      <Input />
    </Form.Item>
    </Form>
    </Modal>
  )
}

export default AddPatient