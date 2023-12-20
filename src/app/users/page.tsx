import UsersTable from '@/components/users/UsersTable';
import React from 'react'

const UsersPage = async (props: any) => {
    const LIMIT = 5;
    const page = props?.searchParams?.page ? props?.searchParams?.page : 1;

    const res = await fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${LIMIT}`)
    const data = await res.json();

    console.log('data', data);

    return (
        <div>
            <UsersTable users={data} meta={{current: +page, pageSize: LIMIT}} />
        </div>
    )
}

export default UsersPage