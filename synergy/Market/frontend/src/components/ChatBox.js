import React, { useEffect, useRef, useState } from "react";
import socketIOClient from "socket.io-client";
import MarkChatUnreadIcon from "@mui/icons-material/MarkChatUnread";
import Button from "../../node_modules/react-bootstrap/esm/Button";
import Row from "../../node_modules/react-bootstrap/esm/Row";
import Col from "../../node_modules/react-bootstrap/esm/Col";
import SendIcon from "@mui/icons-material/Send";

const ENDPOINT =
  window.location.host.indexOf("localhost") >= 0
    ? "http://127.0.0.1:5079"
    : window.location.host;

export default function ChatBox(props) {
  const { userInfo } = props;
  const [socket, setSocket] = useState(null);
  const uiMessagesRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [messageBody, setMessageBody] = useState("");
  const [messages, setMessages] = useState([
    { name: "Admin", body: "Hello there, Please ask your question." },
  ]);

  useEffect(() => {
    if (uiMessagesRef.current) {
      uiMessagesRef.current.scrollBy({
        top: uiMessagesRef.current.clientHeight,
        left: 0,
        behavior: "smooth",
      });
    }
    if (socket) {
      socket.emit("onLogin", {
        _id: userInfo._id,
        name: userInfo.name,
        isAdmin: userInfo.isAdmin,
      });
      socket.on("message", (data) => {
        setMessages([...messages, { body: data.body, name: data.name }]);
      });
    }
  }, [messages, isOpen, socket, userInfo]);

  const supportHandler = () => {
    setIsOpen(true);
    console.log(ENDPOINT);
    const sk = socketIOClient(ENDPOINT);
    setSocket(sk);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (!messageBody.trim()) {
      alert("Error. Please type message.");
    } else {
      setMessages([...messages, { body: messageBody, name: userInfo.name }]);
      setMessageBody("");
      setTimeout(() => {
        socket.emit("onMessage", {
          body: messageBody,
          name: userInfo.name,
          isAdmin: userInfo.isAdmin,
          _id: userInfo._id,
        });
      }, 1000);
    }
  };
  const closeHandler = () => {
    setIsOpen(false);
  };
  return (
    <div className="chatbox">
      {!isOpen ? (
        <Button size="lg" type="button" onClick={supportHandler}>
          <MarkChatUnreadIcon />
        </Button>
      ) : (
        <div className="card card-body">
          <Row>
            <Col>
              <strong>Support </strong>
            </Col>
            <Col>
              <Button
                style={{ marginLeft: 150 }}
                variant="danger"
                type="button"
                onClick={closeHandler}
              >
                <i className="fa fa-close" />
              </Button>
            </Col>
          </Row>

          <ul ref={uiMessagesRef}>
            {messages.map((msg, index) => (
              <li key={index}>
                <strong>{`${msg.name}: `}</strong> {msg.body}
              </li>
            ))}
          </ul>
          <div>
            <form onSubmit={submitHandler} className="row">
              <input
                value={messageBody}
                onChange={(e) => setMessageBody(e.target.value)}
                type="text"
                style={{ marginBottom: 20, width: 300 }}
                placeholder="Type Your message"
              />
              <Button size="sm" type="submit">
                Send <SendIcon />
              </Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
