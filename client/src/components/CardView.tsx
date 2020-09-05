import React from 'react'

interface Props {
  title: string
  desc: string
}

const CardView = (props: Props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>{props.desc}</h4>
    </div>
  )
}

export default CardView
