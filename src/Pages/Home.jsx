import PropTypes from "prop-types";
import { useState } from "react";

import Filter from "../Components/Filter";
import Search from "../Components/Search";
import Button from "../Components/Button";

function Home({ todoData, setTodoData }) {
  const [filterData, setFilterData] = useState([...todoData]);

  const handleDeleteDoneTask = () => {
    const confirmDelete = window.confirm(
      "Are you sure want to delete a completed task?"
    );
    if (confirmDelete) {
      setTodoData((prevTodoData) =>
        prevTodoData.filter((item) => !item.complete)
      );
    }
  };

  const handleDeleteAllTask = () => {
    const confirmDelete = window.confirm(
      "Are you sure want to delete all task?"
    );
    if (confirmDelete) {
      setTodoData([]);
    }
  };

  return (
    <div className="container border mt-5 p-5">
      <Search />
      <Filter />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ul className="list-inline">
              {filterData.map((item) => (
                <div
                  key={item.id}
                  className="d-flex justify-content-between border rounded m-2 p-2"
                >
                  <li
                    className={
                      item.complete
                        ? "text-decoration-line-through text-danger"
                        : "list-ineline-item"
                    }
                  >
                    {item.task}
                  </li>
                  <div className="d-flex justify-content-center align-items-center mx-1 gap-2">
                    <input
                      type="checkbox"
                      className="me-2"
                      style={{ width: "20px", height: "20px" }}
                    />

                    <button className="border-0 bg-transparent">
                      <img
                        width="25px"
                        height="25px"
                        src="edit.svg"
                        alt="Edit.svg"
                      />
                    </button>
                    <button className="border-0 bg-transparent">
                      <img
                        width="25px"
                        height="25px"
                        src="trash.svg"
                        alt="trash.svg"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-6">
            <Button
              onClick={handleDeleteDoneTask}
              text="Delete done task"
              bgColor="btn btn-danger"
            />
          </div>
          <div className="col-6">
            <Button
              onClick={handleDeleteAllTask}
              text="Delete all task"
              bgColor="btn btn-danger"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Home.propTypes = {
  todoData: PropTypes.array,
  setTodoData: PropTypes.func,
};

export default Home;