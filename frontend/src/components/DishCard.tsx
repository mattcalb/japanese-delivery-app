interface DishCardProps {
  name: string;
  description?: string;
  price: number;
  imgUrl?: string;
}

export function DishCard({ name, description, price, imgUrl }: DishCardProps) {
  return (
    <div 
    className="flex flex-col rounded-xs shadow-lg w-full not-lg:max-w-2xs cursor-pointer hover:scale-105 duration-200">
      <div className="relative">
        <img
          src={imgUrl}
          alt="Dish image"
          className="object-center rounded-sm object-cover w-full not-lg:max-w-2xs h-[200px]"
        />
      </div>
      <div className="flex flex-col justify-between p-3 h-full space-y-2">
        <p className="text-lg font-medium">{name}</p>
        <p className="text-sm text-gray line-clamp-2">{description}</p>
        <p className="text-lg font-medium">${price}</p>
      </div>
    </div>
  )
}
