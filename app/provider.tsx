import React from 'react'
import Header from './_components/Header';

function Provider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  const CreateNewUser = () => {
     // Save New User if Not Exist
  }

  return (
    <div>
      <Header />  
      {children}
    </div>
  )
}

export default Provider
