const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findAll({
      include: [{ model: Product }]
    });
    res.status(200).json(tagData)
  } catch (err) {
    res.status(500).json(err);
  }
});

// Find a single tag by its `id`
router.get('/:id', async (req, res) => {
 
  // be sure to include its associated Product data
  try {
    const tagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }]
    })
    if (!tagData) {
      res.status(400).json({ message: 'No product found with that id.' })
    }
    res.status(200).json(tagData)
  } catch {
   res.status(500).json(err)
  }
});

// Create a new tag
router.post('/', async (req, res) => {
  try {
    const tagData = await Tag.create(req.body);
    res.status(200).json(tagData)
  } catch (err){
    res.status(400).json(err);
  }
});

// Update a tag's name by its ID value
router.put('/:id', async (req, res) => {
  try {
    const tagId = await Tag.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  res.status(200).json(tagId);
} catch (err) {
  res.status(400).json(err);
}
});

// Delete a tag by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    await Tag.destroy({
      where: {
        id: req.params.id
      },
    })
  } catch (err){
    res.status(500).json(err)
  }

  res.status(200).json("Delete successful!")
});

module.exports = router;
