import React from "react"
import cn from "classnames"

import Button from "./button"

import styles from "./border-button.module.css"

function BorderButton({ className, children, ...props }){
  return (
    <Button className={cn(styles.button, className)} {...props}>
      { children }
    </Button>
  )
}

export default BorderButton