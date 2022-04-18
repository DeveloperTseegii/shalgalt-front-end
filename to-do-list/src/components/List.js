import { ListGroup, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Input from "./Input";
import "../list.css";

function Lists(props) {
  const [lists, setLists] = useState([]);
  const [deleteRender, setDeleteRender] = props.render;

  useEffect(() => {
    fetch("http://localhost:3002/api/lists", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((data) => data.json(data))
      .then((res) => {
        console.log(res);
        setLists(res.data);
      });
  }, [props.render]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3002/api/deleteList/id/${id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((data) => data.json(data))
      .then((res) => {
        console.log(res);
        setDeleteRender(!deleteRender);
      });
  };

  return (
    <>
      <div className="container w-70 h-100 mt-5">
        <div className="header d-flex justify-content-between align-items-center">
          <h1>My To Do List</h1>
          <button className="count">/</button>
        </div>
        <div className="main-list pt-2">
          <Form.Group className="mb-3">
            {lists.map((i, index) => (
              <ListGroup className="group-list form-check" key={index}>
                <ListGroup.Item as="li" className="lists" variant="flush">
                  <Form.Check type="radio" className="ms-5" />
                  {i.list} <img src="edit.png" alt="" />{" "}
                  <img
                    src="trash.png"
                    alt=""
                    onClick={() => {
                      handleDelete(i._id);
                    }}
                  />
                </ListGroup.Item>
              </ListGroup>
            ))}
            <Input createRender={props.render} />
          </Form.Group>
        </div>
      </div>
    </>
  );
}
export default Lists;
