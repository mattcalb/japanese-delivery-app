import { useState } from "react";
import { DishCard } from "../components/DishCard";
import { CategorySelector } from "../components/CategorySelector";
import { categories } from "../data/categories";
import { dishes } from "../data/dishes";

export function Menu() {

  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(null);

  const handleSelectCategory = (id: number | null) => {
    setSelectedCategoryId(id);
  }

  return (
    <div className="flex flex-col items-center space-y-8 w-full mt-(--header-height)">
      <div className="w-full flex items-center justify-center bg-[url('/bg_menu.jpg')] bg-center bg-cover h-60">
        <h2 className="text-white text-4xl font-medium">OUR MENU</h2>
      </div>
      <p className="w-full max-w-xl text-justify px-4">
        Discover the art of Japanese cuisine through handcrafted sushi, sashimi, and specialties made with fresh, authentic ingredients.
      </p>
      <section className="flex flex-col items-center space-y-8 w-full lg:px-20 px-4">
        <CategorySelector categories={categories} selected={selectedCategoryId} onSelect={handleSelectCategory} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 justify-items-center w-full gap-10 pb-8">
          {dishes
            .filter((dish) => selectedCategoryId === null || dish.categoryId === selectedCategoryId)
            .map((filteredDish) => (
              <DishCard
                key={filteredDish.id}
                name={filteredDish.name.toLocaleUpperCase()}
                description={filteredDish.description}
                imgUrl={filteredDish.image}
                price={filteredDish.price}
              />
            ))}
        </div>
      </section>
    </div>
  )
}
