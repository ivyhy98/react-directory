import { useParams } from "react-router-dom";
import Header from './Header'
export default function EmployeePage({data}) {
  const { id } = useParams();
  const employee = data[id];
  return (
    <div>
      <Header title={employee.name} />;
      <div className="employee-page">
        <section className="name">
          <img src={employee.img} alt="" />
          <div>
            <h2>{employee.name}</h2>
            <h3>{employee.title}</h3>
          </div>
        </section>
        <section className="contact">
          <h1>Call Office:</h1>
          <h2>{employee.numbers.work}</h2>
        </section>
        <section className="contact">
          <h1>Call Mobile</h1>
          <h2>{employee.numbers.mobile}</h2>
        </section>
        <section className="contact">
          <h1>Email</h1>
          <h2>{employee.email}</h2>
        </section>
      </div>
    </div>
  );
}
