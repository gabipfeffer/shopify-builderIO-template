/** @jsxRuntime classic */
/** @jsx jsx */
import { Themed, jsx } from 'theme-ui'
import Link from 'next/link'
import Image from 'next/image'
import React, { FC } from 'react'
import { ILogo } from '@interfaces/header'

const Logo: FC<{ logo: ILogo }> = ({ logo }) => {
  return (
    <Themed.div
      sx={{
        fontSize: 20,
        fontWeight: 'bold',
      }}
    >
      {logo && logo.image && (
        <Themed.a
          as={Link}
          href="/"
          sx={{
            letterSpacing: -1,
            textDecoration: `none`,
            paddingLeft: '5px',
          }}
        >
          <Image
            layout="fixed"
            width={logo.width}
            height={logo.height}
            src={logo.image}
          ></Image>
        </Themed.a>
      )}
      {logo && logo.text && !logo.image && (
        <Themed.a
          as={Link}
          href="/"
          sx={{
            letterSpacing: -1,
            textDecoration: `none`,
            paddingLeft: '5px',
          }}
        >
          {logo.text}
        </Themed.a>
      )}
    </Themed.div>
  )
}

export default Logo
