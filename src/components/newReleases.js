import React from "react"

import newReleaseStyles from "../styles/newReleases.module.scss"

const NewReleases = () => {
  return (
    <div className={newReleaseStyles.container}>
      <h2>New Releases</h2>
      <button>Buy Now</button>
    </div>
  )
}

export default NewReleases
