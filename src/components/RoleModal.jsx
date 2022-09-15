import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form'
import { addRole, getAllRoles } from "../services/role.service";

const RoleModal = (props) => {
  const { show, setShow } = props;
  const [roles, setRoles] = useState([]);
  useEffect(() => {
    getAllRoles().then((response) => {
      setRoles(response.data);
    },
      (err) => {

      })
  }, [])
  const handleClose = () => setShow(false);
  const saveChange = () => {
    addRole().then((response) => {
      setShow(false);
    },
    (err) => {
      
    })
  };
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Add Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select aria-label="Default select example">
            {
              roles.map((role, idx)=>(
                <option key={idx} value={role.id}>{role.name}</option>
              ))
            }
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveChange}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RoleModal;