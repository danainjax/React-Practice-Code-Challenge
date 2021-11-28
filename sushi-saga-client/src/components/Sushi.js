import React from 'react'
import { connect } from 'react-redux'
import { getSushis } from '../redux/actionCreators'

export const Sushi = ({ name, price, img_url, id }) => {
  console.log({ name, price, img_url, id })
  return (
    <div className='sushi'>
      <div className='plate'>
        {false ? null : <img src={img_url} alt='cute sushi' width='100%' />}
      </div>
      <h4 className='sushi-details'>
        {name} - ${price}
      </h4>
    </div>
  )
}
export default connect(null, { getSushis })(Sushi)
