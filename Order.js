function viewOrders(req,res){
    res.end("ViewOrders")
}


function viewOrderById(req,res){
    res.end("viewOrderById")
}

module.exports.viewOrders = viewOrders
module.exports.viewOrderById = viewOrderById