const mongoose = require("mongoose");

// Définition du schéma pour les produits (Product)
const ProductSchema = mongoose.Schema(
  {
    type: {
      type: String,
      enum: ["gaz", "petrole"], // Limite les valeurs à "gaz" ou "petrole"
      required: [true, "Please select either 'gaz' or 'petrole'"],
    },
    name: {
      type: String,
      required: [true, "Please enter product name"], // Nom du produit, requis
    },
    quantity: {
      type: Number,
      required: true, // Quantité du produit, requise
      default: 0, // Valeur par défaut de la quantité
    },
    price: {
      type: Number,
      required: true, // Prix du produit, requis
      default: 0, // Valeur par défaut du prix
    },
  },
  {
    timestamps: true, // Ajoute les champs createdAt et updatedAt automatiquement
  }
);

// Création du modèle Product basé sur le schéma ProductSchema
const Product = mongoose.model("Product", ProductSchema);

// Exportation du modèle Product pour l'utiliser dans d'autres parties de l'application
module.exports = Product;