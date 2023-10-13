import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';

const Ween = (props) => {

    const [totleween, setTotleween] = useState([])
    const [weening, setWeening] = useState("")

    const tostSuccess = {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    }

    useEffect(() => {
        if (props.ween) {
            const hhh = props.ween.filter(e => e.number == props.numberween).map((item) => (
                { coin: Number(item.coin) * 36 }
            ))
            let sum = hhh.reduce(function (prev, current) {
                return prev + +current.coin
            }, 0);

            localStorage.setItem('totleween', JSON.stringify([sum]))
            setTotleween([...totleween, (sum)])
        }
        wOadEven()


    }, [props.ween])

    const wOadEven = () => {
        if (props.ween) {
            const hhh = props.ween.filter(e => e.number == props.oadEven).map((item) => (
                { coin: Number(item.coin) * 2 }
            ))
            let sum = hhh.reduce(function (prev, current) {
                return prev + +current.coin
            }, 0);

            const totleween = JSON.parse(localStorage.getItem('totleween'))
            const newtotleween = [...totleween, (sum)]
            localStorage.setItem('totleween', JSON.stringify(newtotleween))

        }
        wRedBlack()

    }

    const wRedBlack = () => {
        if (props.ween) {
            const hhh = props.ween.filter(e => e.number == props.redBlack).map((item) => (
                { coin: Number(item.coin) * 2 }
            ))
            let sum = hhh.reduce(function (prev, current) {
                return prev + +current.coin
            }, 0);

            const totleween = JSON.parse(localStorage.getItem('totleween'))
            const newtotleween = [...totleween, (sum)]
            localStorage.setItem('totleween', JSON.stringify(newtotleween))
        }
        wDozen()

    }

    const wDozen = () => {
        if (props.ween) {
            const hhh = props.ween.filter(e => e.number == props.dozen).map((item) => (
                { coin: Number(item.coin) * 3 }
            ))
            let sum = hhh.reduce(function (prev, current) {
                return prev + +current.coin
            }, 0);

            const totleween = JSON.parse(localStorage.getItem('totleween'))
            const newtotleween = [...totleween, (sum)]
            localStorage.setItem('totleween', JSON.stringify(newtotleween))
        }
        wHalf()

    }

    const wHalf = () => {
        if (props.ween) {
            const hhh = props.ween.filter(e => e.number == props.half).map((item) => (
                { coin: Number(item.coin) * 2 }
            ))
            let sum = hhh.reduce(function (prev, current) {
                return prev + +current.coin
            }, 0);

            const totleween = JSON.parse(localStorage.getItem('totleween'))
            const newtotleween = [...totleween, (sum)]
            localStorage.setItem('totleween', JSON.stringify(newtotleween))
        }
        wColumn()

    }

    const wColumn = () => {
        if (props.ween) {
            const hhh = props.ween.filter(e => e.number == props.column).map((item) => (
                { coin: Number(item.coin) * 3 }
            ))
            let sum = hhh.reduce(function (prev, current) {
                return prev + +current.coin
            }, 0);


            const totleween = JSON.parse(localStorage.getItem('totleween'))
            const newtotleween = [...totleween, (sum)]
            localStorage.setItem('totleween', JSON.stringify(newtotleween))
        }
        wTotle()
    }

    const wTotle = () => {
        if (localStorage.getItem('totleween')) {
            const totlearray = JSON.parse(localStorage.getItem('totleween'))
            let sum = totlearray.reduce(function (prev, current) {
                return prev + +current
            }, 0);
            setWeening(sum)
            const newcoin = Number(props.coin) + Number(sum)
            props.setCoin(newcoin)
            localStorage.setItem('totleween', "")
            localStorage.setItem('selected', "")

        }


    }
    useEffect(() => {
        if (!weening == "") {
            toast.success(`You Ween ${weening} Coin`, tostSuccess);
        }
    }, [weening])


    return (
        <div>

        </div>
    )
}

export default Ween
