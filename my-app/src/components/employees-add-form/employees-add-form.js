import "./employees-add-form.css";

const EmployeesAddForm = () => {
  return (
    <div className="app-add-form">
      <h3>ახალი თანამშრომლის დამატება</h3>
      <form className="add-form d-flex">
        <input
          type="text"
          className="form-control new-post-label"
          placeholder="სახელი და გვარი"
        />
        <input
          type="number"
          className="form-control new-post-label"
          placeholder="ხელფასი $-ში"
        />

        <button type="submit" className="btn btn-outline-light">
          დამატება
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
