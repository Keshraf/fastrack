const CardHeading = ({ text }: { text: string }) => {
  return (
    <div className="w-full bg-blue-500 rounded-md px-3 py-[2px]">
      <h2 className="text-2xl font-semibold text-blue-50">{text}</h2>
    </div>
  );
};

export default CardHeading;
