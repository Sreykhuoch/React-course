const Product = () => {
  const shoes = [
    {
      productName: "Apple MacBook pro",
      color: "red",
      model: "channels",
      price: "122$",
    },

    {

      productName: "Samsung galaxy A24",
      color: "silver",
      model: "Dior",
      price: "128$",
    },

    {
      productName: "Oppo A35",
      color: "blue",
      model: "Hamers",
      price: "150$",
    },
  ];

  return (
    <>
      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Color
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {shoes.map((item) => (
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.productName}
                </th>
                <td class="px-6 py-4">{item.color}</td>
                <td class="px-6 py-4">{item.model}</td>
                <td class="px-6 py-4">{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;
