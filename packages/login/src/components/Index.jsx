import { Button, Form, Input } from "antd";

export default function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <Form name="login">
        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>
        <Form.Item label="Password" name="password">
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
