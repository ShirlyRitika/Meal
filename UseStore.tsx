import {create} from "zustand";
interface Recipes{
    id:number;
    name:string;
    ingredients:string[];
    instructions:string;
}
interface RecipeStore{
    recipes:Recipes[],
    AddRecipe: (recipe: Recipes)=>void;
    RemoveRecipe: (id:number)=>void;
}

export const useStore=create<RecipeStore>((set)=>({
    recipes:[],
    AddRecipe:(recipe)=>set((state)=>({recipes: [...state.recipes,recipe]})),
    RemoveRecipe:(id) =>set((state)=>({recipes:state.recipes.filter((recipe)=>recipe.id !==id)}))
})) 
