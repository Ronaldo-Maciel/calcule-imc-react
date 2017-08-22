import React from 'react'

export default props => {
    const renderRows = () => {
        const list = props.list || []
        console.log(list)
        return list.map(item => (
            <tr key={item._id}>
                <td> {item.name} </td>
                <td> Qualquer </td>
                <td> {item.imc} </td>
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