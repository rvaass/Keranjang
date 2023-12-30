import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
export default function Home() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    try {
      const respond = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (respond.status == 200) {
        setUsers(respond.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "30px 65px",
        }}
      >
        <h1>Order</h1>
        <button
          type="button"
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalCenter"
        >
          Tambah Pesanan
        </button>
      </div>
      <div
        className="modal fade"
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Input
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="Nama barang"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <table
        className="table table-bordered"
        style={{ width: "70%" }}
        align="center"
        // cellPadding="1"
        // width="300"
        // border="1"
        // style={{ border: "1px solid black" }}
      >
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => {
            return (
              <tr key={idx}>
                <td>{user.id}</td>
                <td>{user.title}</td>
                <td>{user.body}</td>
                <td>{user.aksi}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
