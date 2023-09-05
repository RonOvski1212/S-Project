import "./app-filter.css";

const AppFilter = (props) => {
  const buttonsData = [
    { name: "all", label: "თანამშრომლები", colored: false },
    { name: "rise", label: "დაწინაურება", colored: false },
    { name: "allmoreThen1000", label: "ხელფასი 1000$ ზემოთ", colored: true },
  ];

  const buttons = buttonsData.map(({ name, label, colored }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    const style = colored ? { color: "red" } : null;

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
        style={style}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
