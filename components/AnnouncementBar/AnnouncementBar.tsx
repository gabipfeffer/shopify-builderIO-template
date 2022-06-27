/** @jsxRuntime classic */
/** @jsx jsx */
import React, { FC, useEffect, useState } from 'react'
import { jsx } from 'theme-ui'
import { useCart } from '@lib/shopify/storefront-data-hooks'
import { builder, BuilderComponent } from '@builder.io/react'
import { IHeader } from '@interfaces/header'

const AnnouncementBar: FC<IHeader> = ({ theme }) => {
  const [announcement, setAnnouncement] = useState()
  const cart = useCart()

  useEffect(() => {
    async function fetchContent() {
      const items = cart?.lineItems || []
      const anouncementContent = await builder
        .get('announcement-bar', {
          cacheSeconds: 120,
          userAttributes: {
            itemInCart: items.map(
              (item: any) => item.merchandise.product.handle
            ),
          } as any,
        })
        .toPromise()
      setAnnouncement(anouncementContent)
    }
    fetchContent()
  }, [cart?.lineItems])

  return (
    <BuilderComponent
      content={announcement}
      data={{ theme }}
      model="announcement-bar"
    />
  )
}

export default AnnouncementBar
