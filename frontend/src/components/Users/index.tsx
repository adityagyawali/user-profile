import React, { FC } from 'react'

import { User } from '../../types'
import SingleUser from '../User'

interface Props {
  users: User[]
}

const Users: FC<Props> = ({ users }) => {
  return (
    <div className="users">
      {users.map((user) => {
        return <SingleUser user={user} key={user.blurhash} />
      })}
    </div>
  )
}

export default Users
