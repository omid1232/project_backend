const categories = [
    { id: 1, name: "Scientific" },
    { id: 2, name: "Historical" },
    { id: 3, name: "Literature" },
  ];
  
  const getCategories = (req, res) => {
    res.json(categories);
  };
  
  module.exports = { getCategories };
  