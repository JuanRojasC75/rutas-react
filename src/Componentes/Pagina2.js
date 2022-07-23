import { useState } from "react";
import AddCategory from "./components/AddCategory";

export const Pagina2 = () => {
  const [categories, setCategories] = useState(['One Punch', 'dragonBall'])
  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return
    setCategories([newCategory, ...categories])
    // setCategories(cat =>['valorant',...cat])
  }

  return (
    <>
      <div className="container">
        <h1> Pagina 2</h1>
        <AddCategory
          //setCategories={setCategories}
          onNewCategory={event => onAddCategory(event)}
        />
        <ol>
          {categories.map(category => {
            return <li key={category}>{category}</li>
          })}
        </ol>
      </div>

    </>
  )
}
