import Image from "next/image"
import React from "react"
import College from './College'
import Link from "next/link"


type Props = {}

const CollegeList = (props: Props) => {
  return (
    <section id="colleges"  >
      <Link href={'/college1'}>
        <College
          name={"Govind Ballabh Pant Institute of Engineering and Technology."}
          description={"Govind Ballabh Pant Institute of Engineering and Technology is an autonomous institution for higher technical education located in Pauri Garhwal Uttarakhand."} 
          rating={4}
        />
      </Link>
        
    </section>
  )
}

export default CollegeList