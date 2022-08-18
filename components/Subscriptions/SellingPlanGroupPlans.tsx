/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, SetStateAction } from 'react'
import { Themed, jsx, Label } from 'theme-ui'
import { fadeIn } from '@assets/keyframes'
import SubscriptionChecked from '@components/icons/SubscriptionChecked'
import { ISellingPlan, ISellingPlanGroup } from '@interfaces/product'

const SellingPlanGroupPlans: React.FC<{
  selectedSellingPlan: ISellingPlan | undefined
  setSelectedSellingPlan: Dispatch<SetStateAction<ISellingPlan | undefined>>
  selectedSellingPlanGroup: ISellingPlanGroup
}> = ({
  selectedSellingPlanGroup,
  setSelectedSellingPlan,
  selectedSellingPlan,
}) => {
  return (
    <Themed.div
      sx={{
        animation: `${fadeIn} .1s ease-in-out`,
        mt: '24px',
      }}
    >
      <Themed.div
        sx={{
          fontSize: '11px',
          textTransform: 'uppercase',
          letterSpacing: '3px',
          mb: '5px',
          width: '100%',
          border: 0,
          padding: 0,
        }}
      >
        Subscription Frequency
      </Themed.div>
      {selectedSellingPlanGroup?.sellingPlans?.map(
        (mappedSellingPlan: ISellingPlan) => (
          <Themed.div
            key={mappedSellingPlan.id}
            sx={{
              width: '100%',
            }}
          >
            <Label
              sx={{
                display: 'block',
                position: 'relative',
                fontWeight: 500,
                width: '100%',
                mb: '10px',
              }}
            >
              <Themed.div
                onClick={() => setSelectedSellingPlan(mappedSellingPlan)}
                sx={{
                  fontWeight:
                    selectedSellingPlan?.id === mappedSellingPlan?.id
                      ? 700
                      : 500,
                  color:
                    selectedSellingPlan?.id === mappedSellingPlan?.id
                      ? 'primary'
                      : null,
                  backgroundColor:
                    selectedSellingPlan?.id === mappedSellingPlan?.id
                      ? 'rgba(125,186,99,.07)'
                      : null,
                  display: 'flex!important',
                  alignItems: 'center',
                  padding: '6px',
                  borderRadius: '8px',
                }}
              >
                <SubscriptionChecked
                  checked={selectedSellingPlan?.id === mappedSellingPlan?.id}
                />
                <Themed.div
                  sx={{
                    flexGrow: 1,
                    fontWeight: 700,
                    color:
                      selectedSellingPlan?.id === mappedSellingPlan.id
                        ? 'primary'
                        : null,
                  }}
                >
                  {mappedSellingPlan?.name}
                </Themed.div>
              </Themed.div>
            </Label>
          </Themed.div>
        )
      )}
    </Themed.div>
  )
}

export default SellingPlanGroupPlans
