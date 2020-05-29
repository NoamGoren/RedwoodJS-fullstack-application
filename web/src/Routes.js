import { Router, Route, Private } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/" page={HomePage} name="home" />
      <Private unauthenticated="home">
        <Route path="/products/new" page={NewProductPage} name="newProduct" />
        <Route
          path="/products/{id:Int}/edit"
          page={EditProductPage}
          name="editProduct"
        />
        <Route path="/products/{id:Int}" page={ProductPage} name="product" />
        <Route path="/products" page={ProductsPage} name="products" />
      </Private>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
