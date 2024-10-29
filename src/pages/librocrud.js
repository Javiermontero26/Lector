import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Librocrud() {
  const url = 'https://jsonplaceholder.typicode.com/posts'
  const [post, setPots] = useState()

  const fetchApi = async () => {
    const response = await fetch(url)
    console.log((response).status)
    const responseJSON = await response.json()
    setPots(responseJSON)
    // console.log(responseJSON) - Para verlo en consola todas los datos
  }

  useEffect(() => {
    fetchApi()
  }, [])

  return (
    <div className='App'>
      <h1 className='text-center m-5'>Lista de Usuarios</h1>
      {!post ? 'Cargando...' : (
        <div className='container'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th hidden>ID USER</th>
                <th>ID</th>
                <th>TITULO</th>
                <th>BODY</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {post.map((pts, index) => (
                <tr key={index}>
                  <td hidden>{pts.userId}</td>
                  <td>{pts.id}</td>
                  <td className='col-4'>{pts.title}</td>
                  <td className='col-4'>{pts.body}</td>
                  <td>
                    <button className='btn btn-warning bi bi-pencil-square m-1 text-primary'></button>
                    <button className='btn btn-danger bi bi-archive-fill m-1'></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Librocrud;
