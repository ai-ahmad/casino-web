import React, { useEffect, useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown';


const DropDown = (props) => {
    const [selectCoin, setSelectCoin] = useState(10)
    const coin10 = () => {
        localStorage.setItem('coinvalue', JSON.stringify(10))
        setSelectCoin(10)
    }
    const coin20 = () => {

        localStorage.setItem('coinvalue', JSON.stringify(20))
        setSelectCoin(20)

    }
    const coin30 = () => {
        localStorage.setItem('coinvalue', JSON.stringify(30))
        setSelectCoin(30)
    }
    useEffect(() => {
        if (props.coin <= 10) {
            setSelectCoin(10)
            localStorage.setItem('coinvalue', JSON.stringify(10))
        } 
    }, [props.coin])

    return (
        <div>
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    {selectCoin}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {props.coin >= 10 ? <Dropdown.Item onClick={coin10}>10</Dropdown.Item> : "PLEASE ADD MONEY"}
                    {props.coin >= 20 ? <Dropdown.Item onClick={coin20} >20</Dropdown.Item> : ""}
                    {props.coin >= 30 ? <Dropdown.Item onClick={coin30}>30</Dropdown.Item> : ""}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}

export default DropDown
