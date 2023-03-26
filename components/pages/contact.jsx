import Image from "next/image";
import React from "react";

const Contact = () => {

  return(
    <div >
      <h1 className="title blue">Contact Form</h1>
      <p className="semi-bold black">
        Some content.
      </p>
      <Image alt="DK Care LLC Contact" src="/family.jpeg" style={{width:'400px',objectFit:'cover'}}/>
    </div>
  )
}

export default Contact