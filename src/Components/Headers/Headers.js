import React from 'react'
import { Desktop, Mobile, Tablet } from '../../Layout/Responsive'
import HeaderDesktop from './HeaderDesktop'
import HeaderTablet from './HeaderTablet'
import HeaderMobile from './HeaderMobile'

export default function Headers() {
  return (
    <div>
      <Desktop>
        <HeaderDesktop />
      </Desktop>
      <Tablet>
        <HeaderTablet />
      </Tablet>
      <Mobile>
        <HeaderMobile />
      </Mobile>
    </div>
  )
}
