const Kurs = require('../models/Kurs');
const { fetchJisdorFromBI } = require('../utils/jisdorService');

exports.getToday = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    let kurs = await Kurs.findOne({ tanggal: today });
    
    if (!kurs) {
      const jisdorData = await fetchJisdorFromBI(today);
      kurs = new Kurs({
        tanggal: today,
        usdToIdr: jisdorData.rate,
        sumber: jisdorData.source
      });
      await kurs.save();
    }
    
    res.json(kurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getByDate = async (req, res) => {
  try {
    const { tanggal } = req.params;
    const date = new Date(tanggal);
    date.setHours(0, 0, 0, 0);
    
    let kurs = await Kurs.findOne({ tanggal: date });
    
    if (!kurs) {
      const jisdorData = await fetchJisdorFromBI(date);
      kurs = new Kurs({
        tanggal: date,
        usdToIdr: jisdorData.rate,
        sumber: jisdorData.source
      });
      await kurs.save();
    }
    
    res.json(kurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.create = async (req, res) => {
  try {
    const kurs = new Kurs(req.body);
    await kurs.save();
    res.status(201).json(kurs);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.uploadCSV = async (req, res) => {
  try {
    const { data } = req.body;
    const results = [];
    
    for (const row of data) {
      const date = new Date(row.tanggal);
      date.setHours(0, 0, 0, 0);
      
      const kurs = await Kurs.findOneAndUpdate(
        { tanggal: date },
        {
          tanggal: date,
          usdToIdr: parseFloat(row.usdToIdr),
          sumber: 'MANUAL'
        },
        { upsert: true, new: true }
      );
      results.push(kurs);
    }
    
    res.json({ message: `${results.length} data kurs berhasil diupload`, data: results });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
