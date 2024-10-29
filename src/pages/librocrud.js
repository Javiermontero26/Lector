import React from 'react';

const Librocrud = () => {
    return (
        <div className="container">

            <div className="row mt-5">
                <div className="col-8 d-flex align-items-center">
                    <h1 className="text-start">LISTA DE LIBROS</h1>
                </div>
                <div className="col-4 text-end">
                    <button className="btn btn-success">Agregar</button>
                </div>
            </div>
            <hr className="text-dark" />
            <div className="container">

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">NOMBRE</th>
                            <th scope="col">AUTOR</th>
                            <th scope="col">Género</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Stock</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>La Odisea</td>
                            <td>Homero</td>
                            <td>Ficción</td>
                            <td>S/. 20.00</td>
                            <td>20</td>
                            <td>
                                <button className="btn btn-warning bi-pencil-square">Editar</button>
                                <button className="btn btn-danger bi-archive">Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Librocrud;
