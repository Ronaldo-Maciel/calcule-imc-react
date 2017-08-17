import React from 'react'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map(imc => (
            <tr key={imc._id}>
                <td> {imc.name}</td>
            </tr>
        ))
    }
    return (
        <div className='well bs-component'>
            <table className='table table-striped table-hover'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sexo</th>
                        <th>IMC</th>
                        <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}