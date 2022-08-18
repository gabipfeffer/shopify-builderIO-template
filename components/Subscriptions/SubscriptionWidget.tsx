/** @jsxRuntime classic */
/** @jsx jsx */
import React, { Dispatch, SetStateAction } from 'react'
import { Themed, jsx } from 'theme-ui'
import SellingPlanGroupPlans from '@components/Subscriptions/SellingPlanGroupPlans'
import SellingPlanGroups from '@components/Subscriptions/SellingPlanGroups'
import { ISellingPlan, ISellingPlanGroup } from '@interfaces/product'

const SubscriptionWidget: React.FC<{
  selectedSellingPlan: ISellingPlan | undefined
  selectedSellingPlanGroup: ISellingPlanGroup | undefined
  sellingPlanGroups: Array<ISellingPlanGroup>
  setSelectedSellingPlan: Dispatch<SetStateAction<ISellingPlan | undefined>>
  setSelectedSellingPlanGroup: Dispatch<
    SetStateAction<ISellingPlanGroup | undefined>
  >
}> = ({
  selectedSellingPlan,
  selectedSellingPlanGroup,
  sellingPlanGroups,
  setSelectedSellingPlan,
  setSelectedSellingPlanGroup,
}) => {
  return (
    <Themed.div
      sx={{
        padding: 0,
        border: '0!important',
        margin: '0!important',
      }}
    >
      <Themed.div
        sx={{
          p: 0,
          fontSize: '12px',
        }}
      >
        <SellingPlanGroups
          selectedSellingPlanGroup={selectedSellingPlanGroup}
          sellingPlanGroups={sellingPlanGroups}
          setSelectedSellingPlan={setSelectedSellingPlan}
          setSelectedSellingPlanGroup={setSelectedSellingPlanGroup}
        />
        {selectedSellingPlanGroup ? (
          <SellingPlanGroupPlans
            selectedSellingPlan={selectedSellingPlan}
            selectedSellingPlanGroup={selectedSellingPlanGroup}
            setSelectedSellingPlan={setSelectedSellingPlan}
          />
        ) : null}
      </Themed.div>
    </Themed.div>
  )
}

export default SubscriptionWidget
