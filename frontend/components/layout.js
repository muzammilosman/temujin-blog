import Nav from "./nav"

const Layout = ({ children, categories, seo}) =>{
  return (
    <div>
      <Nav categories={categories}/>
      {children}
    </div>
  )
}

export default Layout
