const { Doctor } = require("../models");
require("dotenv").config();

module.exports = class doctorController {
  static async showAll(req, res) {
    try {
      const Alldoctor = await Doctor.findAll();
      res.status(200).json({
        data: Alldoctor,
      });
    } catch (error) {
      res.status(500).json({
        error: e.message,
      });
    }
  }
  static async show(req, res) {
    try {
      const showdoctor = await Doctor.findByPk(req.params.id);
      res.status(200).json({
        data: showdoctor,
      });
    } catch (error) {
      res.status(500).json({
        error: e.message,
      });
    }
  }
  static async create(req, res) {
    try {
      const result = await Doctor.create({
        name: req.body. name,
        email: req.body.email,
      })
      res.status(200).json({
        data: "Criado com sucesso"
      })
    } catch (e) {
      res.status(500).json({
        error: e.message,
      })
    }
  }
  
  static async update(req, res) {
    try {
      const updatedoctor = await Doctor.findByPk(req.params.id);
      const result = await updatedoctor.update({
        firstName: req.body.firstName,
        email: req.body.email,
      })
      res.status(200).json({
        data: "Atualizado com sucesso"
      })
    } catch (e) {
      res.status(500).json({
        error: e.message,
      })
    }
  }
  static async delete(req, res) {
    try {
      const deletedoctor = await Doctor.findByPk(req.params.id);
      await deletedoctor.destroy()
      res.status(200).json({
        data: "Excluido com Sucesso",
      });
    } catch (e) {
      res.status(500).json({
        error: e.message,
      });
    }
  }
};
