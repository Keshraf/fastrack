export type Food = {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  buttonText?: string;
  onClick?: (id: number) => void;
};

const FoodCard = ({
  id,
  name,
  price,
  description,
  image,
  buttonText = "Edit",
  onClick,
}: Food) => {
  return (
    <div className="w-full rounded-xl p-3 border-[2px] border-[#121212]">
      <div
        className="w-full h-20 rounded-lg overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div className="flex justify-between items-center w-full pt-3 pb-[2px]">
        <h2 className="text-xl font-bold">{name}</h2>
        <button
          className="bg-blue-400 rounded-md py-1 px-4 text-xs"
          onClick={() => onClick && onClick(id)}
        >
          {buttonText}
        </button>
      </div>

      <p className="text-md text-white/70 font-semibold pb-[2px]">${price}</p>
      {/* <p>{vegetarian ? "Vegetarian" : "Non-Vegetarian"}</p> */}
      <p className="text-sm text-white/50">{description}</p>
    </div>
  );
};

export default FoodCard;
