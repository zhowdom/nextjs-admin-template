'use client'
import {useState} from 'react'
import Link from 'next/link'
const Sidebar = () => {
	const menulistData = [
		{
			name:'Dashboard',         // 一级菜单
			id: '0',
			path: '/Dashboard',
      icon: 'icon-bangbangtang-01',
			children: [               // 二级菜单
				{
					name: 'eCommerce',
					id: '0-1',
					path: '/Dashboard/eCommerce',
          icon: '',
					children: []
				},
				{
					name: 'Elements',
					path: '/Dashboard/Elements',
					id: '0-2',
          icon: '',
					children: []
				}
			]
		},
		{
			name:'Calendar',
			path: '/Calendar',
			id: '1',
      icon: 'icon-bingqilin-01',
			children: []
		},
		{
			name:'Profile',
			path: '/Profile',
			id: '2',
      icon: 'icon-jiweijiu-01',
			children: []
		},
		{
			name:'Forms',
			path: '/Forms',
			id: '3',
      icon: 'icon-tiantianquan-01',
			children: [
        {
          name: 'input',
          path: '/Forms/input',
          id: '3-1',
          icon: '',
          children: []
        }
      ]
		},
		{
			name:'Tables',
			path: '/Tables',
			id:'4',
      icon: 'icon-nailao-01',
			children:[]
		},
		{
			name:'Settings',
			path: '/Settings',
			id:'5',
      icon: 'icon-bingqilin-01',
			children:[]
		}
	]
	const [arrowState, setArrowState] = useState(menulistData.map(v => {
      let {id} = v
      return {isActive: false, id}
    }))
	const clickEachItems = (itemId) => {
		setArrowState((prevItems) =>
        prevItems.map((its) => {
            let {isActive, ...a} = its
            return its.id === itemId ? {isActive: !isActive, ...a} : its
          }
        )
    )
	}
	return (
		<>
		<div className="sidebar-box">
			<div className="system-title">Admin</div>
			{
				menulistData.map((item, index) => (
					<div className="items" key={item.id}>
						{
							item.children.length
							?
							<span key={item.id} className={`rightArrow ${arrowState[item.id]['isActive'] ? 'active' : ''}`}>></span>
				       :
				      ''
						}
						{
							item.children.length
							?
							(
                  <div className={`items-child1 iconfont ${item.icon}`} style={{height: arrowState[item.id]['isActive'] ? ((item.children.length + 1) * 40 + 'px') : '40px'}}>
                  <span onClick={ (e) => {clickEachItems(item.id)}} className="inTitle">{<Link href={item.path}>{item.name}</Link>}</span>
  								{
                    item.children.map((item2, index2) => (
                      <div className="twoLayer" key={item2.id} style={{display: arrowState[item.id]['isActive'] ? 'block' : 'none'}}>
                      {<Link href={item2.path}>{item2.name}</Link>}</div>
                    ))
                  }
                  </div>
							)
							:
							<div className={`oneLayer iconfont ${item.icon}`}>{<Link href={item.path}>{item.name}</Link>}</div>
						}
					</div>
				))
			}
		</div>
		</>
	)
}

export default Sidebar