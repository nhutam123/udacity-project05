import { Form, Button, Input } from "antd";
import apiClient from "../../shares/utils/apiClient";
import { Student } from "../../shares/types";
import { useNavigate } from "react-router-dom";

const CreateStudentPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm<Student>();
  const onFinish = (value: Student) => {
    handleCreate(value);
  };

  const handleCreate = async (value: Student) => {
    try {
      await apiClient.post("/student", value);
      navigate("/students");
    } catch {
      console.log("error");
    }
  };

  const handleback = () => {
    navigate("/students");
  };

  return (
    <div>
      <h1>Edit student</h1>
      <Form form={form} onFinish={onFinish}>
        <Form.Item label="Name" name="name">
          <Input placeholder="Name" />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder="Email" />
        </Form.Item>
        <Button type="primary" key="submit" htmlType="submit">
          Create
        </Button>
        <Button type="dashed" htmlType="button" onClick={handleback}>
          back
        </Button>
      </Form>
    </div>
  );
};

export default CreateStudentPage;
