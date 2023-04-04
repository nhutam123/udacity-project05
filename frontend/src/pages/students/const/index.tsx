import { ColumnProps } from "antd/es/table/Column";
import { Student } from "../../../shares/types";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export const useConfigTable = (deleteStudent: (id: number) => void) => {
  const navigate = useNavigate();
  const navigateToEditPage = (id: number) => {
    navigate("/edit", { state: { id: id } });
  };
  const columns: ColumnProps<Student>[] = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "action",
      render: (student: Student) => (
        <div>
          <Button
            type="primary"
            onClick={() => deleteStudent(student.id)}
            danger
          >
            Delete
          </Button>
          <Button onClick={() => navigateToEditPage(student.id)}>Edit</Button>
        </div>
      ),
    },
  ];

  return {
    columns,
  };
};
