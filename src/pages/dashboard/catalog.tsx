import FoodCard, { Food } from "@/components/Cards/Food";

const catalog: Food[] = [
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description:
      "It is a very good burger. It is made using the best ingredients.",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
  {
    name: "Burger",
    vegetarian: false,
    price: 100,
    description: "Burger",
    image:
      "https://www.thecookierookie.com/wp-content/uploads/2023/04/featured-stovetop-burgers-recipe.jpg",
  },
];

const DashboardCatalog = () => {
  return (
    <section className="flex flex-col items-start justify-start w-full h-screen p-9 overflow-y-auto">
      <h1 className="text-3xl font-bold text-center text-white-700">Catalog</h1>
      <h3 className="text-md text-center text-white/20">{"100 Items"}</h3>
      <section className="w-full py-6 grid grid-cols-4 grid-flow-row gap-4">
        {catalog.map((food, index) => {
          return <FoodCard key={index} {...food} />;
        })}
      </section>
    </section>
  );
};

DashboardCatalog.sideNav = true;

export default DashboardCatalog;
