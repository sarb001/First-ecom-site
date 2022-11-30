import React from 'react'
import { useParams} from 'react-router-dom';

const Productscreen = () => {

    const params = useParams();
    const {_id} =  params;

    



  return (
    <div>
        Productscreen  {_id}
    </div>
  )
}

export default Productscreen