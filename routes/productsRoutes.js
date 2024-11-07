const express = require("express");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controllers/productsController');

// Route pour obtenir tous les produits
router.get('/allProducts', getProducts);

// Route pour obtenir un produit spécifique par son ID
router.get("/anProduct/:id", getProduct);

// Route pour créer un nouveau produit
router.post("/newProduct", createProduct);

// Route pour mettre à jour un produit existant par son ID
router.put("/updateProduct/:id", updateProduct);

// Route pour supprimer un produit existant par son ID
router.delete("/deleteProduct/:id", deleteProduct);

// Exportation du routeur pour l'utiliser dans d'autres parties de l'application
module.exports = router;