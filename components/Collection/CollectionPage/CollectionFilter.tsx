/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'

const CollectionFilter: FC<{
  filters: any[]
  selectedFilters: any
  setSelectedFilters: any
}> = ({ filters, selectedFilters, setSelectedFilters }) => {
  const handleFilterSelection = (value: string) => {
    if (selectedFilters.includes(value)) {
      const index = selectedFilters.indexOf(value)

      if (index > -1) {
        selectedFilters.splice(index, 1)
        setSelectedFilters([...selectedFilters])
      }
    } else {
      setSelectedFilters([...selectedFilters, value])
    }
  }

  return (
    <Themed.div
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
      }}
    >
      {Object.entries(filters).map(([key, values]) => (
        <Themed.div>
          <Themed.h4
            sx={{
              color: 'background',
            }}
          >
            {key}
          </Themed.h4>
          <Themed.div
            sx={{
              mt: '15px',
              mb: '15px',
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            {values?.map((value: string) => (
              <Themed.div
                sx={{
                  display: 'flex',
                  gap: '15px',
                }}
              >
                <input
                  type={'checkbox'}
                  onClick={() => handleFilterSelection(`${key}:${value}`)}
                />
                <Themed.p
                  sx={{
                    m: 0,
                    color: 'background',
                  }}
                >
                  {value}
                </Themed.p>
              </Themed.div>
            ))}
          </Themed.div>
        </Themed.div>
      ))}
    </Themed.div>
  )
}

export default CollectionFilter
