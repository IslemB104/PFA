
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

interface SignupCreateFormProps {
  open: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}


const Signup: React.FC<SignupCreateFormProps> = ({
  open,
  onCreate,
  onCancel,
}) => {
  const [form] = Form.useForm();

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 80 }}>
        <Option value="216">+216</Option>
        <Option value="33">+33</Option>
        <Option value="49">+49</Option>
      </Select>
    </Form.Item>
  );



  return (
    <Modal
      open={open}
      title="Créer un compte"
      okText="Create"
      cancelText="Cancel"
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
        name="signup"
        initialValues={{ gender: '', prefix: '+216', user:'' }}
        style={{ maxWidth: 600 }}
      scrollToFirstError
      >
        <Form.Item name="full name" label="Nom et Prénom" rules={[{ required: true }]}>
      <Input />
    </Form.Item>
        <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Mot de passe"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirmer mot de passe"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="phone"
        label="Numéro Tel."
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
      <Form.Item
        name="gender"
        label="Genre"
        rules={[{ required: true, message: 'Please select gender!' }]}
      >
        <Select placeholder="select">
        <Option value=""></Option>
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
        </Select>
      </Form.Item>
      <Form.Item 
      name="date_birth"
       rules={[{ required: true, message: 'Please input your birth date' }]}
      label="Date de naissance">
          <DatePicker />
        </Form.Item>
     {/* <Form.Item name="age" label="Age" rules={[{ type: 'number', min: 0, max: 99 }]}>
      <InputNumber />
       </Form.Item>*/}
        <Form.Item
            name="user"
            label="Vous etes"
            hasFeedback
             rules={[{ required: true, message: 'Please select !' }]}
            >
            <Select placeholder="Please select type user">
            <Option value=""></Option>
            <Option value="doctor">Docteur</Option>
            <Option value="patient">Patient</Option>
           </Select>
        </Form.Item>
        <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.user !== currentValues.user}
          >
            {({ getFieldValue }) =>
              getFieldValue('user') === 'doctor' ? (
                <div>
                <Form.Item name="specialite" label="Spécialité" rules={[{ required: true }]}>
                  <Input />
                </Form.Item>
                <Form.Item name="code_Doc" label="code" rules={[{ required: true },{ pattern: /^\d{6}$/, message: 'Please enter a 6-digit number' }]}>
                <Input />
                </Form.Item>
              </div>
              ) :getFieldValue('user') === 'patient' ? (
                <div>
                  <Form.Item name="code_Pat" label="code" rules={[{ required: true },{ pattern: /^\d{6}$/, message: 'Please enter a 6-digit number' }]}>
                  <Input />
                </Form.Item>
                </div>
              ): null
            }
      </Form.Item>
      {/* /////////////// agreement check box ///////////// */}
       {/* <Form.Item
          name="agreement"
          valuePropName="checked"
          rules={[
              {
                validator: (_, value) =>
                  value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="">agreement</a>
          </Checkbox>
        </Form.Item>*/}



        {/*<Form.Item
          name="title"
          label="Title"
          rules={[{ required: true, message: 'Please input the title of collection!' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <Input type="textarea" />
        </Form.Item>
        <Form.Item name="modifier" className="collection-create-form_last-form-item">
          <Radio.Group>
            <Radio value="public">Public</Radio>
            <Radio value="private">Private</Radio>
          </Radio.Group>
        </Form.Item>*/}
      </Form>
    </Modal>
  );
};

export default Signup