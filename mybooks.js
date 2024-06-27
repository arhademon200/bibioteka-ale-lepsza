app.get('/mybooks', checkAuthenticated, async (req, res) => {
  try {
    const books = await Books.find({ borrower: req.user._id });
    res.render('mybooks', { name: req.user.name, books });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
