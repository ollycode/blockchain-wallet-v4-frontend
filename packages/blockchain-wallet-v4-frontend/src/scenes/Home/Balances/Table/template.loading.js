import React from 'react'
import styled from 'styled-components'
import { SkeletonRectangle } from 'blockchain-info-components'
import Media from 'services/ResponsiveService'

const BalanceSkeleton = styled.div`
  flex: 1;
  display: flex;
  padding: 15px 30px;
  ${Media.tablet`
    padding: 10px 20px;
  `};
`
const SkeletonTable = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export default () => (
  <BalanceSkeleton>
    <SkeletonTable>
      <SkeletonRectangle width='40%' height='70px' bgColor='white-blue' />
      <SkeletonRectangle width='100%' height='35px' bgColor='white-blue' />
      <SkeletonRectangle width='100%' height='35px' bgColor='white-blue' />
      <SkeletonRectangle width='100%' height='35px' bgColor='white-blue' />
    </SkeletonTable>
  </BalanceSkeleton>
)
