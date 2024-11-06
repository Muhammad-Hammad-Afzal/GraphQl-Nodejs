import productModel from "../model/product_model.js"

export default {

        /// Query For Getting Data from Database AS get api in REST
    Query: {
        async product(_, {ID}){
            const product = await productModel.findById({_id: ID})
            if(!product) throw new Error("Product not Found")

            return product
        },

        async allProducts(){
            return await productModel.find().sort({createdAt: -1}) // -1 mean lasttest will comes on top & only 1 mean first insert will come first mean latest will be in last
        }
    },

        /// Mutation for Inserting, Deleting, Or Update data 
    Mutation: {
        async addNewProduct(_, {productInput: { name, description, price }}){
            const newProduct = new productModel({
                name: name,
                description: description,
                price: price,
                createdAt: new Date().toISOString()
            })

            const result = await newProduct.save()
            return {
                ...result._doc
            }
        },

        async deleteProduct(_, {ID}){
            return (await productModel.deleteOne({_id: ID})).deletedCount
        },

        async updateProduct(_, {ID, productInput: {name, description, price}}){
            return (await productModel.updateOne({_id: ID}, {name: name, description: description, price: price})).modifiedCount
        }
    }
}