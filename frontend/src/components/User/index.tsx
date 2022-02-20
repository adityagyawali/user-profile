import React, { FC } from 'react'
import { User } from '../../types'
import { Blurhash } from 'react-blurhash'
import './index.css'

interface Props {
  user: User
}
const SingleUser: FC<Props> = ({ user }) => {
  return (
    <div className="user" key={user.blurhash}>
      <Blurhash hash={user.blurhash} height={300} resolutionX={32} resolutionY={32} punch={1} style={{ width: '100%', maxWidth: 300 }} />

      <div className="description">
        <h3>{user.name}</h3>
        <h3>{user.email}</h3>
      </div>
    </div>
  )
}

export default SingleUser
