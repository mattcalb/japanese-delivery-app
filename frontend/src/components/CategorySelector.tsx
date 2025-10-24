import type { Category } from "../types/category"
import { Button } from "./ui/Button";

interface CategorySelectorProps {
  categories: Category[];
  selected: number | null;
  onSelect: (categoryId: number | null) => void;
}

export function CategorySelector({ categories, selected, onSelect }: CategorySelectorProps) {
  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-center flex-nowrap space-x-4 min-w-max">
        <Button label="ALL" onClick={() => onSelect(null)} variety={selected === null ? 'primaryBtn' : 'secondaryBtn'} isSelected={true} />
        {categories.map((category) => (
          <Button
            key={category.id}
            label={category.name.toLocaleUpperCase()}
            onClick={() => onSelect(category.id)}
            variety={selected === category.id ? 'primaryBtn' : 'secondaryBtn'}
            isSelected={selected === category.id}
          />
        ))}
      </div>
    </div>
  )
}
