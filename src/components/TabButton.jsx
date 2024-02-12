import React from 'react'

export default function TabButton({children,onSelect,isSelect}) {
  return (
    <li>
        <button id className={isSelect?'active':undefined} onClick={onSelect}>
        {children} 
        </button>
    </li>
  )
}
