import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Menu as AntdMenu, MenuProps } from 'antd';
import './menu.css';
import { useCallback } from 'react';
import { router } from '../..';
import { MenuClickEventHandler } from 'rc-menu/lib/interface';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: "会议室管理"
  },
  {
    key: '2',
    label: "预定管理"
  },
  {
    key: '3',
    label: "用户管理"
  },
  {
    key: '4',
    label: "统计"
  }
];

const handleMenuItemClick: MenuClickEventHandler = (info) => {
  if (info.key === '3') {
    router.navigate('/user_manage')
  }
}


export function Menu() {
  const location = useLocation()

  return <div id="menu-container">
    <div className="menu-area">
      <AntdMenu
        defaultSelectedKeys={(location.pathname === '/user_manage') ? ['3'] : ['1']}
        onClick={handleMenuItemClick}
        items={items}
      />
    </div>
    <div className="content-area">
      <Outlet></Outlet>
    </div>
  </div>
}
