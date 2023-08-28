import "./app-filter.css";

const AppFilter = () => {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        თანამშრომლები
      </button>
      <button className="btn btn-outline-light" type="button">
        დაწინაურება
      </button>
      <button className="btn btn-outline-light" type="button">
        ხელფასი 1000$ ზემოთ
      </button>
    </div>
  );
};

export default AppFilter;
