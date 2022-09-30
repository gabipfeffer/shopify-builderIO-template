/** @jsxRuntime classic */
/** @jsx jsx */
import React from 'react'
import { jsx, Themed } from 'theme-ui'
import TablePagination from '@components/Table/TablePagination.component'
import Link from 'next/link'

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
              <Themed.h4
                sx={{
                  fontSize: ['12px', '14px'],
                }}
              >
                {header}
              </Themed.h4>
            </Themed.div>
          ))}
        </Themed.div>
        {rows.map((row, index) => (
          <Themed.a as={Link} key={row.handle} href={row.handle}>
            <Themed.div
              sx={{
                cursor: 'pointer',
                width: '100%',
                display: 'grid',
                gridTemplateColumns: `repeat(${headers.length}, 1fr)`,
                p: '10px',
                borderTop: index === 0 ? '2px solid' : '1px solid',
                borderBottom:
                  index === rows.length - 1 ? '2px solid' : '1px solid',
                borderColor: 'primary',
                transition: 'all 0.5s ease',
                '&:hover': {
                  transform: 'scale(1.03)',
                },
              }}
            >
              {row.values.map((value: string) => (
                <Themed.h5 key={value}>{value}</Themed.h5>
              ))}
            </Themed.div>
          </Themed.a>
        ))}
      </Themed.div>
      <TablePagination />
    </Themed.div>
  )
}

export default Table
