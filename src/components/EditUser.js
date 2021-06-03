import React, { useContext, useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

export const EditUser = (props) => {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });
  const { users, editUser } = useContext(GlobalContext);
  const history = useHistory();
  const currentUserId = props.match.params.id;

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(() => {
      return selectedUser;
    });
  }, [currentUserId, users]);

  const onSubmit = () => {
    editUser(selectedUser);
    history.push("/");
  };

  const onNameChange = (e) => {
    setSelectedUser({
      id: currentUserId,
      name: e.target.value,
      email: selectedUser.email,
      phone: selectedUser.phone,
    });
  };
  const onEmailChange = (e) => {
    setSelectedUser({
      id: currentUserId,
      name: selectedUser.name,
      email: e.target.value,
      phone: selectedUser.phone,
    });
  };

  const onPhoneChange = (e) => {
    setSelectedUser({
      id: currentUserId,
      name: selectedUser.name,
      email: selectedUser.email,
      phone: e.target.value,
    });
  };

  return (
    <>
      <h1>EDIT USER</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={selectedUser.name}
            onChange={onNameChange}
            placeholder="Enter Name"
            className="mb-2"
            required
          ></Input>
          <Label>Email</Label>
          <Input
            type="email"
            name="name"
            value={selectedUser.email}
            onChange={onEmailChange}
            placeholder="Enter Email"
            className="mb-2"
            required
          ></Input>
          <Label>Phone</Label>
          <Input
            type="number"
            name="name"
            value={selectedUser.phone}
            onChange={onPhoneChange}
            placeholder="Enter Phone Number"
            className="mb-2"
            required
          ></Input>
        </FormGroup>
        <Button type="submit" className="btn-warning">
          Update
        </Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </>
  );
};
