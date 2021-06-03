import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { v4 as uuid } from "uuid";

export const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();
  const onSubmit = () => {
    const newUser = {
      id: uuid(),
      name,
      email,
      phone,
    };
    addUser(newUser);
    history.push("/");
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };
  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const onPhoneChange = (e) => {
    setPhone(e.target.value);
  };
  return (
    <>
      <h1>ADD EMPLOYEE</h1>
      <Form onSubmit={onSubmit}>
        <FormGroup>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={name}
            onChange={onNameChange}
            placeholder="Enter Name"
            className="mb-2"
            required
          ></Input>
          <Label>Email</Label>
          <Input
            type="email"
            name="name"
            value={email}
            onChange={onEmailChange}
            placeholder="Enter Email"
            className="mb-2"
            required
          ></Input>
          <Label>Phone</Label>
          <Input
            type="number"
            name="name"
            value={phone}
            onChange={onPhoneChange}
            placeholder="Enter Phone Number"
            className="mb-2"
            required
          ></Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger ml-2">
          Cancel
        </Link>
      </Form>
    </>
  );
};
