import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://books-server-eosin.vercel.app/category')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleCategoryClick = (categoryName) => {
    navigate(`/books/${categoryName}`);
  };

  return (
    <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
      {categories.map((category) => (
        <Fade key={category._id} triggerOnce delay={200}>
          <div
            className="card shadow-lg p-4 text-center cursor-pointer flex flex-col items-center min-h-[220px] justify-center"
            onClick={() => handleCategoryClick(category.name)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-16 h-16 object-cover mb-4"
            />
            <h2 className="text-xl font-bold">{category.name}</h2>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Categories;
