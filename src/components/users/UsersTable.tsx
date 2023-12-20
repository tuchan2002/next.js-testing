'use client'

import { IUser } from '@/types';
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import React from 'react'

interface IProps {
  users: IUser[] | [];
  meta: {
    current: number;
    pageSize: number;
  }
}
const UsersTable = (props: IProps) => {
  const TOTAL_RECORDS = 10;

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const dataSource: IUser[] = props.users;
  const columns: ColumnsType<IUser> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
  ];
  
  const onChangePage = (pagination: any) => {
    if(pagination && pagination.current) {
      const params = new URLSearchParams(searchParams);
      params.set('page', pagination.current);
      replace(`${pathname}?${params.toString()}`)
    }
  }
  
  return (
    <div>
      <Table 
        rowKey={"id"}
        bordered 
        dataSource={dataSource} 
        columns={columns} 
        pagination={{...props.meta, total: TOTAL_RECORDS}}
        onChange={onChangePage}
      />
    </div>
  )
}

export default UsersTable