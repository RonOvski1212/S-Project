import "./app-info.css";

const AppInfo = ({ increased, employees }) => {
  return (
    <div className="app-info">
      <h1>კომპანიაში თანამშრომლების აღრიცხვა: </h1>
      <h2>დასაქმებულთა საერთო რაოდენობა N: {employees} </h2>
      <h2>პრემიას მიიღებს: {increased} თანამშრომელი</h2>
    </div>
  );
};

export default AppInfo;
