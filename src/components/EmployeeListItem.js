export default function EmplyeeListItem({ employee }) {
  return (
    <div className="list-item">
      <img src={employee.img} alt={employee.name} />
      <div>
        <h3>{employee.name}</h3>
        <h4>{employee.title}</h4>
      </div>
    </div>
  );
}
