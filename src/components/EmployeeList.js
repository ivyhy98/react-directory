import EmployeeListItem from "./EmployeeListItem";
import { Link } from "react-router-dom";

export default function EmployeeList({ data }) {
  return (
    <div className="list">
    
      {data.map((employee) => {
        return (
          <Link to={`/${employee.id}`}>
            <div key={employee.id}>
              <EmployeeListItem employee={employee} />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
