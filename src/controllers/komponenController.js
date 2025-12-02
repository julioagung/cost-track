const Komponen = require('../models/Komponen');

exports.getAll = async (req, res) => {
  try {
    const komponen = await Komponen.find().sort({ namaKomponen: 1 });
    res.json(komponen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const komponen = await Komponen.findById(req.params.id);
    if (!komponen) return res.status(404).json({ message: 'Komponen tidak ditemukan' });
    res.json(komponen);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const komponen = new Komponen(req.body);
    await komponen.save();
    res.status(201).json(komponen);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const komponen = await Komponen.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!komponen) return res.status(404).json({ message: 'Komponen tidak ditemukan' });
    res.json(komponen);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const komponen = await Komponen.findByIdAndDelete(req.params.id);
    if (!komponen) return res.status(404).json({ message: 'Komponen tidak ditemukan' });
    res.json({ message: 'Komponen berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
