const { Label } = require('../models').models;

module.exports = {
  async create(req, res) {
    const createdLabel = await Label.create(req.body);

    res.status(200).json(createdLabel);
  },
  async readAll(req, res) {
    const labels = await Label.findAll();

    res.status(200).json(labels);
  },
  async update(req, res) {
    const willBeUpdated = req.body;
    const { id } = willBeUpdated;
    delete willBeUpdated.id;
    await Label.update(willBeUpdated, { where: { id } });

    res.status(200).json({ message: '수정 되었습니다.' });
  },
};
