import React from 'react';

import SideBarLink from './SideBarLink';

function SideBarLinks({ sideBarItems }) {
  return (
    <div>
      <SideBarLink category={sideBarItems.mainCategory} />
      <SideBarLink category={sideBarItems.paymentCategory} />
      <SideBarLink category={sideBarItems.OrdersCategory} />
    </div>
  )
}

export default SideBarLinks;
