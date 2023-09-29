type Props = {
  text: string;
};

const PrimaryButton = ({ text }: Props) => {
  return (
    <button
      type="button"
      className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 w-28"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
