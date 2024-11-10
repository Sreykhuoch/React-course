import React from 'react'
import Profile from "./Profile"
import P1 from "../../assets/orange.jpg"
import P2 from "../../assets/dream.jpg"
const GroupPoster = () => {
  return (
    <>
      <Profile imageSrc={P1} title="srey khuoch is beautiful" description="Ensure Tailwind is properly installed and configured in your project.">
        <button>click me</button>
      </Profile>
      <Profile imageSrc={P2} title="veasna is the most handsome man" description="Ensure Tailwind is properly installed and configured in your project."/>
      <Profile imageSrc={P2} title="i love my mom the most" description="Ensure Tailwind is properly installed and configured in your project."/>
    </>
  )
}

export default GroupPoster;
