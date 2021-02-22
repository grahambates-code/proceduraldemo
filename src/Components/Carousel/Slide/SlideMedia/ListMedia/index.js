import React, {Fragment, useState} from 'react';
import './index.less'
import Query from './Query'
export default () => {

     const [showModal, setShowModal] = useState(false);

     return <Fragment>

         {showModal && <div className={'ListMediaModal'}><div className={'content'}>
             <Query/>
         </div> </div>}

         <button onClick={() => setShowModal(true)}>Show Media</button>
     </Fragment>
}
