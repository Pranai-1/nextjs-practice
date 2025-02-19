export default function DummyData({products}:{products:any}){
    return(
        <div className="p-4 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Product List</h2>
        <ul className="space-y-4">
          {products.map((product:any) => (
            <li
              key={product.id}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <h3 className="text-xl font-semibold">{product.name}</h3>
              {/* <p className="text-gray-700">
                <span className="font-medium">Price:</span> ${product.price}
              </p>
              <p className="text-gray-600">
                <span className="font-medium">Description:</span> {product.description}
              </p>
              <p className="text-gray-500">
                <span className="font-medium">Category:</span> {product.category} */}
              {/* </p> */}
            </li>
          ))}
        </ul>
      </div>
    )
}