import React from 'react';

import SideBarLink from './SideBarLink';

function SideBarLinks({ sideBarItems }) {
  return (
    <div>
      <SideBarLink category={sideBarItems.mainCategory} />
    </div>
  )
}

export default SideBarLinks;
