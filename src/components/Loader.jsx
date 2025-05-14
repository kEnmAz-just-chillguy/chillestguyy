const CardSkeleton = () => {
    return (
      <div className="card bg-base-100 shadow-sm group p-4">
        <div className="h-48 bg-gray-300 animate-pulse mb-4"></div> {/* Скелетон изображения */}
        <div className="card-body px-2 py-3">
          <div className="h-6 bg-gray-300 animate-pulse mb-2"></div> {/* Скелетон для названия */}
          <div className="h-4 bg-gray-300 animate-pulse mb-3"></div> {/* Скелетон для описания */}
          <div className="flex items-center gap-1 mb-4">
            <div className="h-3 w-8 bg-gray-300 animate-pulse"></div> {/* Скелетон для рейтинга */}
          </div>
          <div className="flex">
            <div className="h-3 w-20 bg-gray-300 animate-pulse"></div> {/* Скелетон для цены по месяцам */}
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="h-6 w-16 bg-gray-300 animate-pulse"></div> {/* Скелетон для цены */}
            <div className="h-8 w-8 bg-gray-300 animate-pulse rounded-full"></div> {/* Скелетон для кнопки добавления в корзину */}
          </div>
        </div>
      </div>
    );
  };
  
  export default CardSkeleton;
  