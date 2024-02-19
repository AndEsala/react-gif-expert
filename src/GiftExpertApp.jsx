import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["Assassin's Creed"]);

  const onAddCategory = (inputCategory) => {
    if (categories.includes(inputCategory)) return;
    setCategories([inputCategory, ...categories]);
  }

  return (
    <>
      <h1>GiftExpertApp</h1>

      <AddCategory onNewCategory={onAddCategory}/>

      { categories.map(category => <GifGrid key={category} category={category}/>) }
    </>
  )
}
