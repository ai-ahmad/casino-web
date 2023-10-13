import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';

const ClickTable = (props) => {
    const [selectedNo,setSelectedNo] = useState([])
    useEffect(()=>{
        if (localStorage.getItem('selected')) {
            setSelectedNo(JSON.parse(localStorage.getItem('selected')))
        }
    },[props.coin])
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>SELECTED BET</th>
                        <th>COIN</th>                        
                    </tr>
                </thead>
                <tbody>
                    {selectedNo && selectedNo.map((item, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.selectedbet}</td>
                            <td>{item.coin}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default ClickTable
