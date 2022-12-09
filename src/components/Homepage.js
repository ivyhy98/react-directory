import Header from './Header';
import SearchBar from './SearchBar';
import EmployeeList from './EmployeeList';
export default function HomePage({data}) {
  return (
    <div className="homepage">
      <Header title="Employee Directory" />;
      <SearchBar />
      <EmployeeList data={data} />
    </div>
  );
}