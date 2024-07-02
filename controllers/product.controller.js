const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../products.json');

const readProductsFile = () => {
    const productsData = fs.readFileSync(productsFilePath, 'utf8');
    return JSON.parse(productsData);
}

const readProduct = async(req, res) => {
    try{
        const productId = req.params.id;
        const products = readProductsFile();
        const product = products.find(p => p.productId === productId);

        if(!product){
            return res.status(404).json({ error: 'Product not found'});
        }
        return res.status(200).json(product);

    } catch(error){
        return res.status(500).json({ error: err.message})
    }
}

const getAllProducts = async(req, res) => {
    try{
        const products = readProductsFile();
        if(!products || products.length === 0){
            return res.status(404).json({ error: "No products found"});
        }
        return res.status(200).json(products);
    } catch (error){
        return res.status(500).json({error: error.message})
    }
}

module.exports = {getAllProducts, readProduct};