const productsData = require('../data/products.json');
const { getGoldPrice, calculatePrice, calculatePopularityStars } = require('../services/goldPriceService');

exports.getAllProducts = async (req, res) => {
  try {
    const { search, minPrice, maxPrice, minPopularity, maxPopularity } = req.query;
    const goldPrice = await getGoldPrice();

    let products = productsData.map(product => ({
      ...product,
      price: calculatePrice(product.popularityScore, product.weight, goldPrice),
      popularityStars: calculatePopularityStars(product.popularityScore)
    }));

    if (search) {
      const s = search.toLowerCase().trim();
      products = products.filter(p =>
        p.name.toLowerCase().includes(s) ||
        (p.description && p.description.toLowerCase().includes(s))
      );
    }

    if (minPrice) products = products.filter(p => p.price >= Number(minPrice));
    if (maxPrice) products = products.filter(p => p.price <= Number(maxPrice));
    if (minPopularity) products = products.filter(p => p.popularityScore >= Number(minPopularity) / 100);
    if (maxPopularity) products = products.filter(p => p.popularityScore <= Number(maxPopularity) / 100);

    res.json({
      success: true,
      data: products,
      goldPrice,
      count: products.length
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};
