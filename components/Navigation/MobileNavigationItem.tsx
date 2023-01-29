/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, FC, SetStateAction, useState } from 'react'
import { Themed, jsx } from 'theme-ui'
import { fadeIn } from '@assets/keyframes'
import { INavigation } from '@interfaces/navigation'
import { ILocales } from '@interfaces/locale'
import { useRouter } from 'next/router'

const MobileNavigationItem: FC<{
  navigationSection: INavigation
  setMobileNavigationActive: Dispatch<SetStateAction<boolean>>
}> = ({ navigationSection, setMobileNavigationActive }) => {
  const [active, setActive] = useState(false)
  const router = useRouter()

  return (
    <>
      <Themed.div
        onClick={() =>
          navigationSection?.sections?.length ? setActive(!active) : null
        }
        sx={{
          fontSize: '12px',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          padding: '11px 0',
          borderBottom: '1px solid',
          borderColor: 'text',
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Themed.a href={navigationSection?.link}>
          {navigationSection?.title[router.locale as ILocales]}
        </Themed.a>
        {navigationSection?.sections?.length ? (
          <Themed.div
            sx={{
              display: 'block',
              transition: '.3s',
              transform: active ? 'rotate(180deg)' : 'none',
            }}
          >
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 1024 1024"
              className="icon icon-arrow"
              style={{
                overflow: 'hidden',
                fill: 'white',
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
            >
              <path d="M926.553 256.428c25.96-23.409 62.316-19.611 83.605 7.033 20.439 25.582 18.251 61.132-6.623 83.562l-467.010 421.128c-22.547 20.331-56.39 19.789-78.311-1.237l-439.071-421.128c-24.181-23.193-25.331-58.79-4.144-83.721 22.077-25.978 58.543-28.612 83.785-4.402l400.458 384.094 427.311-385.33z"></path>
            </svg>
          </Themed.div>
        ) : null}
      </Themed.div>

      <Themed.ul
        sx={{
          opacity: active ? 1 : 0,
          display: active ? 'block' : 'none',
          padding: '16px 0',
          transition: '.3s',
          animation: `${fadeIn} .65s ease`,
        }}
      >
        {navigationSection.sections?.map((section) => (
          <Themed.li
            key={`mobile-nav-subsection-${
              section?.title[router.locale as ILocales]
            }`}
            sx={{
              display: 'block',
              mb: '5px',
            }}
          >
            <Themed.a
              onClick={() => setMobileNavigationActive(false)}
              href={section?.link}
              sx={{
                color: 'text',
                transition: '.3s',
              }}
            >
              {section.title[router.locale as ILocales]}
            </Themed.a>
          </Themed.li>
        ))}
      </Themed.ul>
    </>
  )
}

export default MobileNavigationItem
