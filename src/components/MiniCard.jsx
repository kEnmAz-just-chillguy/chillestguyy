function MiniCard ({item}) {
return(
    <div className="flex  items-center gap-3 p-2  rounded-md shadow-sm bg-white hover:bg-gray-200 hover:border">
    <img
      src={item.img}
      alt=''
      className="w-12 h-12 object-cover rounded"
    />
    <div className="flex flex-col text-sm flex-grow">
      <span className="font-medium text-gray-800">{item.name}</span>
      <span className="text-gray-500 truncate w-25">{item.description}</span>
      <span className="font-semibold text-blue-600 mt-1">${item.price}</span>
    </div>
  </div>
)
}

export default MiniCard