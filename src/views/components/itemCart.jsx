
//React
import React, { useState } from "react"

//Bootstrap
import Dropdown from 'react-bootstrap/Dropdown'
import CloseButton from 'react-bootstrap/CloseButton'
import Badge from 'react-bootstrap/Badge'



export default function ItemCart () {
    
    const [items, setItems] = useState([{
        id: 1,
        fullName: "Ignacio Perez",
        profesion: "electricista",
        dias: 1,
        selectedDays: [],
    },
    {
        id: 2,
        fullName: "juan Perez",
        profesion: "albañil",
        dias: 1,
        selectedDays: [],
    },
    {
        id: 3,
        fullName: "jose Perez",
        profesion: "cerrajero",
        dias: 1,
        selectedDays: [],
    },
    {
        id: 4,
        fullName: "Juan Perez",
        profesion: "Plomero",
        dias: 1,
        selectedDays: [],
    },
    {
        id: 5,
        fullName: "jose Perez",
        profesion: "cerrajero",
        dias: 1,
        selectedDays: [],
    },])

    const days = ["Lunes ", "Martes ", "Miercoles ", "Jueves ", "Viernes ", "Sabado "]

    const sumarRestarDias = (type, id) => {

        if(type === "-") {
            let newItem = items.find((item) => {
                return item.id === id
             })
             if(newItem.dias > 0 ) {
                 newItem.dias = --newItem.dias
                 setItems((prevState) => {
                    return [...prevState]
                 })
             }
        } else {
            let newItem = items.find((item) => {
               return item.id === id
            })
            if(newItem.dias >= 0 && newItem.dias < 5) {
                newItem.dias = ++newItem.dias
                setItems((prevState) => {
                    return [...prevState]
                })
            }
        }
    }

    const deleteItem = (id) => {

        setItems(items.filter((item) => {
            return item.id !== id
        }))
    }

    const deleteDay = (day, id) => {
        // let newItem = items.find((item) => {
        //     return item.id === id
        // })

        // let arr = items.filter((e) => console.log(e, "e array"))

        // if(newItem.selectedDays.includes(day)) {
        //     newItem.selectedDays.filter((d) => {
                
        //         console.log(d, "d filter") // sabado
        //         console.log(newItem.selectedDays, " newItem.selectedDays") // ['Martes ', 'Miercoles ', 'Viernes ', 'Sabado ']
        //         console.log(!newItem.selectedDays.includes(d), " newItem.selectedDays") // false

        //         return !newItem.selectedDays.includes(d)
        //     })
        // }
    }

    const selectDays = (day, id) => { //day = "Lunes", id = 1

        let newItem = items.find((item) => {
            return item.id === id
        })
        if(!newItem.selectedDays.includes(day)) {
            newItem.selectedDays.push(day)
        }
        setItems((prevState) => {
            return [...prevState]
        })

    }

    const totalDays = (items) => {

        let counter = 0

        items.map((item) => {
            counter = counter + item.selectedDays.length
        })
        console.log( counter, "count")
        return counter
    }

    return (
        <>
        {
            items ?
            items.map((item) => {
                return <>
                <tbody>
                <tr>
                <td>{item.id}</td>
                <td>{item.fullName}</td>    
                <td>{item.profesion}</td>
                <td style={{fontSize: "20px"}}>
                    {/* <Badge bg="secondary" onClick={() => sumarRestarDias("-", item.id)} style={{cursor: "pointer", marginLeft: "30px", marginRight: "15px"}}>
                        -
                    </Badge> */}
                    {item.selectedDays.length}
                    {/* <Badge bg="secondary" onClick={() => sumarRestarDias("+", item.id)} style={{cursor: "pointer", marginLeft: "15px", marginRight: "15px"}}>
                        +
                    </Badge>  */}
                </td>
                <td>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Selecciona los dias
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {
                            days.map((day) => {
                               return (<Dropdown.Item onClick={() => selectDays(day, item.id)}>{day}</Dropdown.Item>)
                            })
                        }
                    </Dropdown.Menu>
                </Dropdown>
                </td>
                <td>
                    {
                        item.selectedDays?.map((day) => {
                            return <td>
                                <Badge style={{cursor: "pointer"}} onClick={() => deleteDay(day, item.id)}>
                                    {day}</Badge> 
                                </td>
                        })
                    }
                </td>
                <td>
                    <CloseButton variant="white" onClick={() => deleteItem(item.id)} />
                </td>
                </tr>
            </tbody>
            </>
            })

            :

            <></>
            }
            <Badge pill bg="warning" text="dark" style={{width: "100px", height: "40px", fontSize: "20px"}}>
                        Total: {totalDays(items)}
            </Badge>{' '}
        </>
    )
}