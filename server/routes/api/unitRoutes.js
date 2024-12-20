import { Router } from 'express';
import Unit from '../../models/Units.js';

const router = Router();

console.log('hit unitRouters');

// GET a unit
router.get('/:id', async (req, res) => {
  try {
    const unitData = await Unit.findByPk(req.params.id);
    if (!unitData) {
      res.status(404).json({ message: 'No unit with this id!' });
      return;
    }
    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE a unit
router.put('/:id', async (req, res) => {
  try {
    const unitData = await Unit.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!unitData[0]) {
      res.status(404).json({ message: 'No unit with this id!' });
      return;
    }
    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// DELETE a unit
router.delete('/:id', async (req, res) => {
  try {
    const unitData = await Unit.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!unitData) {
      res.status(404).json({ message: 'No unit with this id!' });
      return;
    }
    res.status(200).json(unitData);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
