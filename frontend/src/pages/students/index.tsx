import { useEffect, useState } from "react";
import { Student } from "../../shares/types";
import apiClient from "../../shares/utils/apiClient";

import { Button, Table } from "antd";
import { useConfigTable } from "./const";
import { useNavigate } from "react-router-dom";

const StudentPage = () => {
  const [listStudent, setListStudent] = useState<Student[]>([]);
  const deleteStudent = (id: number) => {
    apiClient.delete("/student", { params: { studentId: id } });
    window.location.reload();
  };

  const navigate = useNavigate();

  const navigateToCreatePage = () => {
    navigate("/create");
  };

  const { columns } = useConfigTable(deleteStudent);
  const getStudents = async () => {
    const students = await apiClient.get<Student[]>("/students");
    setListStudent(students.data);
  };

  useEffect(() => {
    getStudents();
  }, []);

  return (
    <div>
      <h1>List Students</h1>
      <Button onClick={navigateToCreatePage}>Create Student</Button>
      <Table columns={columns} dataSource={listStudent} rowKey="id" />
    </div>
  );
};

export default StudentPage;
