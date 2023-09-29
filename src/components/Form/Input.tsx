const EmailInput = () => {
  return (
    <div className="w-full">
      <label htmlFor="email" className="sr-only">
        Email
      </label>
      <input
        type="email"
        name="email"
        id="email"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
        placeholder="Email"
      />
    </div>
  );
};

const PasswordInput = () => {
  return (
    <div className="w-full">
      <label htmlFor="password" className="sr-only">
        Password
      </label>
      <input
        type="password"
        name="password"
        id="password"
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-3"
        placeholder="Password"
      />
    </div>
  );
};

export { EmailInput, PasswordInput };
