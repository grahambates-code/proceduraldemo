import React, {Fragment, useState} from 'react';
import './index.less'
import Query from './Query'
import "wired-elements";
import Modal from 'react-modal';

export default ({slide}) => {

    const [modalIsOpen,setIsOpen] = React.useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

     return <Fragment>

         <button onClick={openModal}>Open Modal</button>
         <Modal
             isOpen={modalIsOpen}
             onRequestClose={closeModal}
             style={{
                 content : {
                     top                   : '50%',
                     left                  : '50%',
                     right                 : 'auto',
                     bottom                : 'auto',
                     marginRight           : '-50%',
                     transform             : 'translate(-50%, -50%)'
                 }
             }}
             contentLabel="Example Modal"
         >

             <button onClick={closeModal}>close</button>

             <Query slide={slide} closeModal={closeModal}/>

         </Modal>

     </Fragment>
}
