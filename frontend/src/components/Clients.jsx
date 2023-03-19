import React , {useState} from 'react'
import {  useQuery , useMutation } from "@apollo/client"
import TableComp from "./TableComp"
import { GET_CLIENTS } from '../queries/client'
import Loader from './Loader'
import AddClients from './AddClients'


const Clients = () => {
    const {loading , error , data} = useQuery(GET_CLIENTS)
    if(loading) return <Loader/>
    return (
        <div className="flex flex-col py-3 px-2">
            <h1 className='text-center tracking-wide text-2xl font-semibold text-gray-800'>Clients Lists</h1>
            {
                !loading && !error && <div className="mt-2">
                    <TableComp data={data.clients}/>
                </div>
            }
            <AddClients/>
        </div>
    )
}

export default Clients