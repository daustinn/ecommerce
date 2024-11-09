import React from 'react'
import styles from './bubble.module.css'

type Props = React.HTMLAttributes<HTMLHeadingElement> & {
  children: string
}

export default function BubbleText({ children, ...props }: Props) {
  return (
    <h2 {...props}>
      {children.split('').map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  )
}
