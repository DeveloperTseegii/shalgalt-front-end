import { Form, Button } from "react-bootstrap";

function Input(j) {
  const [createRender, setCreateRender] = j.createRender;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    fetch("http://localhost:3002/api/createLists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        list: e.target[0].value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setCreateRender(!createRender);
      });
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formGroupPassword">
          <Form.Control placeholder="what is next?" className="input" />
          <Button className="button" type="submit">
            Add Task
          </Button>
        </Form.Group>
      </Form>
    </>
  );
}

export default Input;
