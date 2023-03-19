import React, { useState , useEffect} from 'react'
import { Modal, Button, Label, TextInput, Checkbox } from "flowbite-react"
import { useMutation } from '@apollo/client'
import {ADD_CLIENT} from "../mutations/client"
import {GET_CLIENTS} from "../queries/client"


const AddClients = () => {
    const [show, setshow] = useState(false)
    const [clientData, setclientData] = useState({
        name: "",
        email: "",
        phone: " "
    })
    const [addClient] = useMutation(ADD_CLIENT , {
        variables : {
            name : clientData.name,
            email : clientData.email,
            phone : clientData.phone
        } ,
        refetchQueries:[{query : GET_CLIENTS}]
    })



    useEffect(() => {
        console.log(clientData)
    }, [clientData]);
    const onClick = () => {
        setshow(true)
    }
    const onClose = () => {
        setshow(false)
    }
    return (
        <React.Fragment>
            <Button onClick={onClick}>
                Toggle modal
            </Button>
            <Modal
                show={show}
                size="md"
                popup={true}
                onClose={onClose}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8">
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                            Add Client
                        </h3>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="email"
                                    value="Your email"
                                />
                            </div>
                            <TextInput
                                id="email"
                                placeholder="name@company.com"
                                required={true}
                                name="email"
                                value={clientData.email}
                                onChange={(e) => setclientData({ ...clientData, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="name"
                                    value="Your name"
                                />
                            </div>
                            <TextInput
                                id="name"
                                type="string"
                                required={true}
                                name="name"
                                value={clientData.name} onChange={(e) => setclientData({ ...clientData, [e.target.name]: e.target.value })}
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <Label
                                    htmlFor="phone"
                                    value="Your phone"
                                />
                            </div>
                            <TextInput
                                id="phone"
                                type="string"
                                required={true}
                                name="phone"
                                value={clientData.phone} onChange={(e) => setclientData({ ...clientData, [e.target.name]: e.target.value })}
                            />
                        </div>

                        <div className="w-full">
                            <Button onClick={()=>{
                                addClient();
                                onClose();
                            }}>
                                Create
                            </Button>
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    )
}

export default AddClients