// Importation du modèle Orders depuis le fichier ordersModel
const Orders = require("../models/ordersModel");

// Fonction pour obtenir toutes les commandes
const getOrders = async (req, res) => {
    try {
        // Récupère toutes les commandes dans la base de données
        const orders = await Orders.find({});
        // Envoie une réponse avec un statut 200 (succès) et les commandes récupérées en format JSON
        res.status(200).json(orders);
    } catch (error) {
        // En cas d'erreur, envoie une réponse avec un statut 500 (erreur serveur) et le message d'erreur
        res.status(500).json({ message: error.message });
    }
};

// Fonction pour obtenir une commande spécifique par son ID
const getOrder = async (req, res) => {
    try {
        // Récupère l'ID de la commande depuis les paramètres de la requête
        const { id } = req.params;
        // Récupère la commande correspondante dans la base de données
        const orders = await Orders.findById(id);
        // Envoie une réponse avec un statut 200 (succès) et la commande récupérée en format JSON
        res.status(200).json(orders);
    } catch (error) {
        // En cas d'erreur, envoie une réponse avec un statut 500 (erreur serveur) et le message d'erreur
        res.status(500).json({ message: error.message });
    }
};

// Fonction pour créer une nouvelle commande
const createOrders = async (req, res) => {
    try {
        // Crée une nouvelle commande avec les données du corps de la requête
        const orders = await Orders.create(req.body);
        // Envoie une réponse avec un statut 200 (succès) et la commande créée en format JSON
        res.status(200).json(orders);
    } catch (error) {
        // En cas d'erreur, envoie une réponse avec un statut 500 (erreur serveur) et le message d'erreur
        res.status(500).json({ message: error.message });
    }
};

// Fonction pour mettre à jour une commande spécifique par son ID
const updateOrders = async (req, res) => {
    try {
        // Récupère l'ID de la commande depuis les paramètres de la requête
        const { id } = req.params;
        // Met à jour la commande correspondante dans la base de données avec les données du corps de la requête
        const orders = await Orders.findByIdAndUpdate(id, req.body);
        if (!orders) {
            // Si la commande n'est pas trouvée, envoie une réponse avec un statut 404 (non trouvé) et un message d'erreur
            return res.status(404).json({ message: "Orders not found" });
        }
        // Récupère la commande mise à jour dans la base de données
        const updatedOrders = await Orders.findById(id);
        // Envoie une réponse avec un statut 200 (succès) et la commande mise à jour en format JSON
        res.status(200).json(updatedOrders);
    } catch (error) {
        // En cas d'erreur, envoie une réponse avec un statut 500 (erreur serveur) et le message d'erreur
        res.status(500).json({ message: error.message });
    }
};

// Fonction pour supprimer une commande spécifique par son ID
const deleteOrders = async (req, res) => {
    try {
        // Récupère l'ID de la commande depuis les paramètres de la requête
        const { id } = req.params;
        // Supprime la commande correspondante dans la base de données
        const orders = await Orders.findByIdAndDelete(id);
        if (!orders) {
            // Si la commande n'est pas trouvée, envoie une réponse avec un statut 404 (non trouvé) et un message d'erreur
            return res.status(404).json({ message: "Orders not found" });
        }
        // Envoie une réponse avec un statut 200 (succès) et un message de confirmation de la suppression
        res.status(200).json({ message: "Orders deleted successfully" });
    } catch (error) {
        // En cas d'erreur, envoie une réponse avec un statut 500 (erreur serveur) et le message d'erreur
        res.status(500).json({ message: error.message });
    }
};

// Exporte les fonctions pour les rendre disponibles dans d'autres parties de l'application
module.exports = {
    getOrders,
    getOrder, 
    createOrders,
    updateOrders,
    deleteOrders,
};