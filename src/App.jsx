import Header from "./Header"
import Content from "./Content"
import React from "react"
import Main from "./body"
import SecondPage from "./SecondPage"
import ThirdPage from "./ThirdPage"
import Footer from "./Footer"
import Footer2 from "./Footer2"
import Form1 from "./Form1"
// import Formbg from "./Formbg"
function App() {

  return (
    <>
<Main>
    <Header></Header>
    <Content></Content>
    </Main>
<SecondPage></SecondPage>
<ThirdPage></ThirdPage>
<Form1></Form1>
<Footer></Footer>

{/* <ContactUs></ContactUs> */}
<Footer2></Footer2>

    </>      
  )
}

export default App
