const mongoose = require("mongoose");

// Définition du schéma pour les commandes (Orders)
const OrdersSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter order name"], // Nom de la commande, requis
    },
    quantity: {
      type: Number,
      required: true, // Quantité de la commande, requise
      default: 0, // Valeur par défaut de la quantité
    },
    price: {
      type: Number,
      required: true, // Prix de la commande, requis
      default: 0, // Valeur par défaut du prix
    },
    image: {
      type: String,
      required: false, // Image de la commande, non requise
    },
  },
  {
    timestamps: true, // Ajoute les champs createdAt et updatedAt automatiquement
  }
);

// Création du modèle Orders basé sur le schéma OrdersSchema
const Orders = mongoose.model("Orders", OrdersSchema);

// Exportation du modèle Orders pour l'utiliser dans d'autres parties de l'application
module.exports = Orders;