/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, SetStateAction } from 'react'
import { Themed, jsx, Label } from 'theme-ui'
import SubscriptionIcon from '@components/icons/SubscriptionIcon'
import OneTimePurchaseIcon from '@components/icons/OneTimePurchaseIcon'
import { ISellingPlan, ISellingPlanGroup } from '@interfaces/product'

const SellingPlanGroups: React.FC<{
  sellingPlanGroups: Array<ISellingPlanGroup>
  selectedSellingPlanGroup?: ISellingPlanGroup | undefined
  setSelectedSellingPlan: Dispatch<SetStateAction<ISellingPlan | undefined>>
  setSelectedSellingPlanGroup: Dispatch<
    SetStateAction<ISellingPlanGroup | undefined>
  >
}> = ({
  sellingPlanGroups,
  setSelectedSellingPlan,
  setSelectedSellingPlanGroup,
  selectedSellingPlanGroup,
}) => {
  return (
    <Themed.div
      sx={{
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <Themed.div
        onClick={() => {
          setSelectedSellingPlanGroup(undefined)
          setSelectedSellingPlan(undefined)
        }}
        sx={{
          flex: '1 1 100%',
        }}
      >
        <Label
          sx={{
            height: '100%',
            display: 'block',
            position: 'relative',
            fontWeight: 500,
            width: '100%',
            mb: '10px',
            letterSpacing: '0.5px',
            '@media screen and (max-width: 767px)': {
              width: '100%',
              maxWidth: '500px',
              textAlign: 'center',
            },
          }}
        >
          <Themed.div
            sx={{
              borderColor: !selectedSellingPlanGroup ? 'primary' : 'secondary',
              color: !selectedSellingPlanGroup ? 'primary' : 'secondary',
              fontWeight: !selectedSellingPlanGroup ? 700 : 500,
              display: 'flex!important',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              textAlign: 'center',
              padding: '0',
              transition: '.3s',
              border: '1px solid',
              borderRadius: '5px',
              backgroundColor: '#fff',
            }}
          >
            <OneTimePurchaseIcon />
            <Themed.div
              sx={{
                color: !selectedSellingPlanGroup ? 'primary' : 'secondary',
                fontWeight: !selectedSellingPlanGroup ? 700 : 500,
                textAlign: 'center',
              }}
            >
              One-time Purchase
            </Themed.div>
          </Themed.div>
        </Label>
      </Themed.div>
      {sellingPlanGroups?.map((sellingPlanGroup) => {
        return (
          <Themed.div
            onClick={() => setSelectedSellingPlanGroup(sellingPlanGroup)}
            key={sellingPlanGroup?.name}
            sx={{
              flex: '1 1 100%',
              ml: '10px',
            }}
          >
            <Label
              sx={{
                height: '100%',
                display: 'block',
                position: 'relative',
                fontWeight: 500,
                width: '100%',
                mb: '10px',
                letterSpacing: '0.5px',
                '@media screen and (max-width: 767px)': {
                  width: '100%',
                  maxWidth: '500px',
                  textAlign: 'center',
                },
              }}
            >
              <Themed.div
                sx={{
                  borderColor: selectedSellingPlanGroup
                    ? 'primary'
                    : 'secondary',
                  color: selectedSellingPlanGroup ? 'primary' : 'secondary',
                  fontWeight: selectedSellingPlanGroup ? 700 : 500,
                  display: 'flex!important',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  textAlign: 'center',
                  padding: '0',
                  transition: '.3s',
                  border: '1px solid',
                  borderRadius: '5px',
                  backgroundColor: 'background',
                }}
              >
                <SubscriptionIcon />
                <Themed.div
                  sx={{
                    color: selectedSellingPlanGroup ? 'primary' : 'secondary',
                    fontWeight: selectedSellingPlanGroup ? 700 : 500,
                    textAlign: 'center',
                  }}
                >
                  {sellingPlanGroup.name}
                </Themed.div>
              </Themed.div>
            </Label>
          </Themed.div>
        )
      })}
    </Themed.div>
  )
}

export default SellingPlanGroups
