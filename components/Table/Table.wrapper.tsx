/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx } from 'theme-ui'
import Table from '@components/Table/Table.component'

const TableWrapper = ({ rows }: any) => {
  return <Table rows={rows} />
}

export default TableWrapper
