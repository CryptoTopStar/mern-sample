import React, { useEffect } from "react";
import { useState } from "react";
import RoleModal from "./RoleModal";

const AdminTable = (props) => {
  const [show, setShow] = useState(false);

  function showModal(){
    setShow(true);
  }
  const { data } = props;
  console.log(data)
  if (data.length) console.log(data[0].roles)
  return !data.length ? (<></>) :
    (<>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">username</th>
            <th scope="col">email</th>
            <th scope="col">roles</th>
            <th scope="col">edit</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index}</th>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.roles.map((role) => role.name).reduce((cur, item) => cur + "," + item)}</td>
                <td><div className="btn btn-success" onClick={showModal}>Add</div></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <RoleModal show={show} setShow={setShow}/>
    </>
    )
}

export default AdminTable;