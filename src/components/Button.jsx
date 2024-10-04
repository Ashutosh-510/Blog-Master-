// Common Button for all components 
// , but we use it  in some components to test and know about an all for one button. 
import React from 'react'

function Button(
    {
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
    }
) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props} >
        {children}
    </button>
  )
}

export default Button
// VERY IMPORTANT
// check out forwardref hook of react "GOOGLE SEARCH"
