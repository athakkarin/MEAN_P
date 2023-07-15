var products = []

let p1  = { 
    "productId":123456,
    "productName":"Legion y520",
    "price":120000,
    "qty":15
}

products.push(p1)

console.log("products loaded -> ",products);

function addProduct(req, res) {
    let productName = req.body.productName
    let price = req.body.price
    let qty = req.body.qty
    let productId = parseInt(Math.random() * 10000000)


    let product = {
        "productId": productId,
        "productName": productName,
        "price": price,
        "qty": qty
    }

    products.push(product)

    res.json({ "msg": "Product Added", "data": product, "rcode": 200 })
}

function getAllProducts(req, res) {

    res.json({ "msg": "Product Ret.", "data": products, "rcode": 200 })

}

function deleteProductById(req, res) {

    let productId = req.params.productId
    console.log("productId = " + productId);

    console.log(`ProductId = ${productId}`);

    let tmpProducts = [] 
    for(let i=0;i<products.length;i++){
        if(products[i].productId != productId){
            tmpProducts.push(products[i]) 
        }
    }
    products = tmpProducts

    res.json({ "msg": "product deleted", "data": productId, "rcode": 200 })
}


module.exports.addProduct = addProduct
module.exports.getAllProducts = getAllProducts
module.exports.deleteProductById = deleteProductById