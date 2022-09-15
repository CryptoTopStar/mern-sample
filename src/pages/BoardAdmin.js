import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import AdminTable from "../components/AdminTable";

const BoardAdmin = () => {
  const [content, setContent] = useState([]);
  useEffect(() => {
    UserService.getAdminBoard().then(
      (response) => {
        console.log(response.data.length)
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>User Management</h3>
      </header>
      <AdminTable data={content} />
    </div>
  );
};

export default BoardAdmin;
