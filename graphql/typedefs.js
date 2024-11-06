export default `#graphql
type Product {
    _id: String,
    name: String,
    description: String
    price: Int,
    createdAt: String
}

type Query {
    product(ID: String): Product!,
    allProducts: [Product]
}


input ProductInput {
    name: String,
    description: String,
    price: Int
}

type Mutation {
    addNewProduct(productInput: ProductInput): Product!
    deleteProduct(ID: String): Boolean,
    updateProduct(ID: String, productInput: ProductInput): Boolean
}
`