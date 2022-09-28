/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Table from '@components/Table/Table.component'

const TableWrapper = ({ rows, headers }: any) => {
  return <Table rows={rows} headers={headers} />
}

export default TableWrapper
