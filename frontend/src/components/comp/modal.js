import React, { useEffect, useState } from 'react';
import { Modal, Button, ModalBody } from 'reactstrap';


export default function LogoutModal({ Isopen,onClick,onconfirm }) {
   

    return (
        <Modal isOpen={Isopen}>
            <ModalBody>
                Do you want to logout?
                <Button color='danger' onClick={()=>{onClick(!Isopen)}} >Cancel</Button>
                <Button color='primary' onClick={()=>{onconfirm()}}>Logout</Button>
            </ModalBody>
        </Modal>
    );
}
