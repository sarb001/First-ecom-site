import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Navbar = () => {
  return (
    <div className='n-container'>
        <div className="n-row">
            <div className="n-col">
                <span className='n-email'>Email -- mrsinghbusiness05@gmail.com </span>
            </div>
            <div className="n-col">
                Login <FontAwesomeIcon icon="fa-duotone fa-square-right" />
            </div>
        </div>
    </div>
  )
}

export default Navbar