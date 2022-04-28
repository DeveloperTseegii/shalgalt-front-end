import { Modal, Button, Form } from "react-bootstrap";
import { useState } from "react";

function AddPost(j) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [createRender, setCreateRender] = j.createRender;

  const handleSubmit = (e) => {
    e.preventDefault();
    const today = new Date().toISOString().slice(0, 10);
    console.log(e.target[0].value);
    fetch("http://localhost:3000/api/addpost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: e.target[0].value,
        description: e.target[1].value,
        posted_date: today,
        taskEnd: false,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        // setCreateRender(!createRender);
      });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        + Add Post
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="text" placeholder="Title" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <div className="button">
              <Button variant="light">Cancel</Button>
              <Button variant="primary" onClick={handleClose} type="submit">
                + Create post
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddPost;
