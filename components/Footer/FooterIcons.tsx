/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC } from 'react'
import { Themed, jsx } from 'theme-ui'
import IgIcon from '@components/icons/Ig'
import FbIcon from '@components/icons/Fb'
import TwitterIcon from '@components/icons/Twitter'
import { ISocialIcons } from '@interfaces/social'

const IconRenders = {
  instagramProfile: IgIcon,
  facebookProfile: FbIcon,
  twitterProfile: TwitterIcon,
}

const FooterIcons: FC<{
  icons?: ISocialIcons
}> = ({ icons }) => (
  <Themed.div
    sx={{
      mt: '30px',
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    }}
  >
    {icons
      ? Object.entries(icons)?.map(([key, value]) => (
          <Themed.div
            key={key}
            sx={{
              margin: '0 16px 0 0',
              display: 'inline-block',
            }}
          >
            <Themed.a
              target={'_blank'}
              key={key}
              href={value}
              sx={{
                margin: 0,
                transition: '.3s',
              }}
            >
              {/* @ts-ignore*/}
              {IconRenders[key]}
            </Themed.a>
          </Themed.div>
        ))
      : null}
  </Themed.div>
)

export default FooterIcons
