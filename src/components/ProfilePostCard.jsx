import { useEffect, useState } from "react";
import { Button, Col, Image, Row } from 'react-bootstrap';
import pic from "../assets/profile-picture.jpg";

export default function ProfilePostCard({ content, postId }) {
  const [likes, setLikes] = useState(0);

  useEffect(() => {
    fetch(
      `https://c79e07e7-914f-4db7-8868-16cbd20a73e7-00-2gmzc1xbvcmkq.pike.replit.dev/likes/post/${postId}`
    )
      .then((response) => response.json())
      .then((data) => setLikes(data.length))
      .catch((error) => console.error("Error:", error))
  }, [postId]);

  return (
    <Row
      className="p-3"
      style={{
        borderTop: '1px solid #D3D3D3',
        borderBottom: '1px solid #D3D3D3',
      }}
    >
      <Col sm={1}>
        <Image src={pic} fluid roundedCircle />
      </Col>

      <Col>
        <strong>Glenda</strong>
        <span> @glenda.lim · March 21</span>
        <p>{content}</p>
        <div className="d-flex justify-content-between">
          <Button variant="light">
            <i className="bi bi-chat"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-repeat"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-heart"> {likes}</i>
          </Button>
          <Button variant="light">
            <i className="bi bi-graph-up"></i>
          </Button>
          <Button variant="light">
            <i className="bi bi-upload"></i>
          </Button>
        </div>
      </Col>
    </Row>
  );
}
