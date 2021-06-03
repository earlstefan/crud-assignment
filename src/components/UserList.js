import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { Button, Table } from "reactstrap";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone No.</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => (
              <tr key={user.id} className="">
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td className="d-flex">
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn btn-warning mr-1 table-btn"
                  >
                    Edit
                  </Link>
                  <Button
                    onClick={() => removeUser(user.id)}
                    color="danger"
                    className="table-btn"
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
        </tbody>
      </Table>
      {users.length <= 0 && (
        <h4 className="text-center">No Users Available.</h4>
      )}
    </>
  );
};
