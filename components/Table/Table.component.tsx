/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, Themed } from 'theme-ui'
import TablePagination from '@components/Table/TablePagination.component'

const Table = ({ rows, headers }: { headers: string[]; rows: any[] }) => {
  return (
    <Themed.div
      sx={{
        maxWidth: '1400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Themed.div
        sx={{
          p: '5px 10px',
          textAlign: 'center',
          width: '100%',
          height: '40vh',
          overflowY: 'scroll',
          '::-webkit-scrollbar': {
            display: 'none',
          },
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
        }}
      >
        <Themed.div
          sx={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
            mb: '15px',
            p: '0 10px',
          }}
        >
          {headers.map((header: string) => (
            <Themed.div key={header}>
              <Themed.h4>{header}</Themed.h4>
            </Themed.div>
          ))}
        </Themed.div>
        {rows.map((row) => (
          <Themed.a
            key={row.handle}
            sx={{
              width: '100%',
              display: 'grid',
              gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
              p: '10px',
              m: '1px 0',
              borderTop: '1px solid',
              borderBottom: '1px solid',
              borderColor: 'primary',
            }}
            href={row.handle}
          >
            {row.values.map((value: string) => (
              <Themed.div key={value}>
                <Themed.h5>{value}</Themed.h5>
              </Themed.div>
            ))}
          </Themed.a>
        ))}
      </Themed.div>
      <TablePagination />
    </Themed.div>
  )
}

export default Table
