/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import { IAccountCourse } from '@interfaces/account'

export const CoursesAccountTab: FC<{
  courses: IAccountCourse
}> = ({ courses }) => {
  return (
    <Themed.div
      sx={{
        maxWidth: '1316px',
        margin: '0 auto',
      }}
    >
      CoursesAccountTab
    </Themed.div>
  )
}

export default CoursesAccountTab
