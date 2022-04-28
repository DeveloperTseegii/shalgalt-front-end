import { Button, Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import AddPost from "./Modal";
import "../posts.css";

function Posts(props) {
  const [posts, setPosts] = useState([]);
  const [deleteRender, setDeleteRender] = props.render;

  useEffect(() => {
    fetch("http://localhost:3000/api/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((data) => data.json(data))
      .then((res) => {
        setPosts(res.data);
      });
  }, [props.render]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/api/delete/id/${id}`, {
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
      <div className="main-post container mt-5">
        <div className="header row mb-5">
          <div className="col-6">
            <h2>MY VLOG POSTS</h2>
          </div>
          <div className="addpost col-6">
            <AddPost addRender={setDeleteRender} />
          </div>
        </div>
        {posts.map((data, i) => (
          <Card className="Card border-0" key={i}>
            <Card.Img variant="top" src="image1.jpeg" />
            <Button
              className="button-delete"
              variant="outline-danger"
              onClick={() => {
                handleDelete(data._id);
              }}
            >
              Delete Post
            </Button>
            <Card.Body>
              <Card.Title className="date">
                {data.posted_date.slice(0, 10)}
              </Card.Title>
              <Card.Title>{data.title}</Card.Title>
              <Card.Text className="desc">{data.description}</Card.Text>
              <hr />
            </Card.Body>
          </Card>
        ))}
      </div>
    </>
  );
}
export default Posts;
