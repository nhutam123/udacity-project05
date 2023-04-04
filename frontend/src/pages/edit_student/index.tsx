import { Form, Button, Input } from "antd";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import apiClient from "../../shares/utils/apiClient";
import { Student } from "../../shares/types";
import { log } from "console";

const EditStudentPage = () => {
  const params = useLocation();
  const { state } = params;
  const [student, setStudent] = useState<Student>({
    id: state.id,
    name: "",
    email: "",
  });
  const [form] = Form.useForm<Student>();
  const onFinish = (value: Student) => {
    console.log(value);
    handleEdit(student);
  };

  const handleEdit = async (value: Student) => {
    const body: Student = { ...value, id: state.id };
    console.log(body);
    await apiClient.put("/student", body);
  };

  const getStudentById = async (id: number) => {
    const response = await apiClient.get<Student>("/student", {
      params: { studentId: id },
    });
    setStudent(response.data);
  };
  useEffect(() => {
    getStudentById(state.id);
  }, []);

  useEffect(() => {
    form.setFieldsValue(student);
  }, [student, form]);

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
        <Button type="primary" key="submit" htmlType="submit" danger>
          Edit
        </Button>
      </Form>
    </div>
  );
};

export default EditStudentPage;
