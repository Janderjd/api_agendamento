const { Patient } = require("../models");
require("dotenv").config();

module.exports = class patientController {
  static async showAll(req, res) {
    try {
      const Allpatient = await Patient.findAll();
      res.status(200).json({
        data: Allpatient,
      });
    } catch (error) {
      res.status(500).json({
        error: e.message,
      });
    }
  }
  static async show(req, res) {
    try {
      const Showpatient = await Patient.findByPk(req.params.id);
      res.status(200).json({
        data: Showpatient,
      });
    } catch (e) {
      res.status(500).json({
        error: e.message,
      });
    }
  }
  
  static async create(req, res) {
    try {
      const result = await Patient.create({
        name: req.body.name,
        email: req.body.email
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
      const updatePatient = await Patient.findByPk(req.params.id);
      const result = await updatePatient.update({
        name: req.body.name,
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
      const delPatient = await Patient.findByPk(req.params.id);
      await delPatient.destroy()
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
