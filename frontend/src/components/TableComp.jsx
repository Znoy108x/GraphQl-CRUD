import React, { useState, useEffect } from 'react'
import { Table } from "flowbite-react"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useQuery, useMutation } from "@apollo/client"
import { DELETE_CLIENT } from "../mutations/client"
import {GET_CLIENTS} from "../queries/client"

const TableComp = ({ data }) => {
    const [delId, setdelId] = useState("")
    const [deleteClient] = useMutation(DELETE_CLIENT, { variables: { id: delId } ,
    refetchQueries:[{query : GET_CLIENTS}]
})

    useEffect(() => {
        deleteClient();
    }, [delId])

    return (
        <Table hoverable={true} className='font-lora'>
            <Table.Head>
                <Table.HeadCell>
                    Name
                </Table.HeadCell>
                <Table.HeadCell>
                    Email
                </Table.HeadCell>
                <Table.HeadCell>
                    Phone
                </Table.HeadCell>
                <Table.HeadCell>
                    <span className="sr-only">
                        Edit
                    </span>
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    data.map((client) => (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={client.id}>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-[10px]">
                                {client.name}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-[10px]">
                                {client.email}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-[10px]">
                                {client.phone}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-[10px]">

                                <div className="bg-red-500 rounded-full  text-white p-1 cursor-pointer hover:bg-emerald-400 shadow-xl" onClick={() => {
                                    setdelId(client.id);
                                }}>
                                    <DeleteOutlineOutlinedIcon fontSize="small" />
                                </div>
                            </Table.Cell>
                        </Table.Row>
                    ))
                }
            </Table.Body>
        </Table>
    )
}

export default TableComp