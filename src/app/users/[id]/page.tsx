import React from 'react'

const UserDetail = (props: any) => {
  const {params} = props;

  return (
    <div>UserDetail {params?.id}</div>
  )
}

export default UserDetail