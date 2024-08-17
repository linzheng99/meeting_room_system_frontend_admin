import { Outlet, useNavigate } from 'react-router-dom';
import { Menu as AntdMenu, MenuProps } from 'antd';
import './menu.css';
import { useCallback } from 'react';

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
    key: 'user_manage',
    label: "用户管理"
  },
  {
    key: '4',
    label: "统计"
  }
];


export function Menu() {
  const navigate = useNavigate();
  const onClick = useCallback(({ key }: { key: string }) => {
    navigate('/' + key)
  }, [])

  return <div id="menu-container">
    <div className="menu-area">
      <AntdMenu
        onClick={onClick}
        defaultSelectedKeys={['3']}
        items={items}
      />
    </div>
    <div className="content-area">
      <Outlet></Outlet>
    </div>
  </div>
}
