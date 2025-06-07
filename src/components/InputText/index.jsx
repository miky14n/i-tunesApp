
export default function InputText({
  filterOptions=["all"],
  title = "",
  personalPlaceHolder = "put any text here",
  onInputChange = () => {},
  onSelectChange = () => {}
}) {
  return (
    <div>
      <label htmlFor="search" className="block text-sm font-medium text-gray-900">
        {title}
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline outline-gray-300 focus-within:outline-2 focus-within:outline-indigo-600">
          <input
            id="search"
            name="search"
            type="text"
            placeholder={personalPlaceHolder}
            onChange={(e) => onInputChange(e.target.value)}
            className="block flex-1 py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none"
          />
          <select
            id="filter"
            name="filter"
            aria-label="Filter"
            onChange={(e) => onSelectChange(e.target.value)}
            className="ml-2 py-1.5 pr-7 pl-3 text-base text-black-500 rounded-md focus:outline-indigo-600"
          >
            {Object.entries(filterOptions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}

          </select>
        </div>
      </div>
    </div>
  );
}
