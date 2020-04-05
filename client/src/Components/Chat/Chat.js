import React, { useEffect, useState } from "react";
import Infobar from "../infoBar/infoBar";
import Input from "../Input/Input";
import Messages from "../Messages/Messages";
import TextContainer from "../TextContainer/TextContainer";
import io from "socket.io-client";
import queryString from "query-string";
import "./Chat.css";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const END_POINT = "localhost:4002";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    setName(name);
    setRoom(room);

    socket = io(END_POINT);

    socket.emit("join", { name: name, room: room });

    return () => {
      socket.emit("disconnect");

      socket.off();
    };

    // console.log(socket)
  }, [END_POINT, location.search]);

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
    // console.log('from 2nd use effect',messages)
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    console.log("message sent");

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log(message, messages);

  return (
    <div className="outer-container">
      <div className="inner-container">
        <Infobar room={room} />

        <Messages messages={messages} name={name} />

        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />

        <TextContainer users={users} />
      </div>
    </div>
  );
};

export default Chat;
