import {create} from "zustand"
interface Meals{
    id:number,
    strMeals:string,
    strMealThumb:string;
}
interface StoreState{
    meals:Meals[],
    searchQuery:string,
    setMeals:(meals:Meals[])=>void;
    setSearchQuery:(query:string)=>void;
}
export const UseStore = create<StoreState>((set)=>({
        meals:[],
        searchQuery:'',
        setMeals:(meals:Meals[])=>set({meals}),
        setSearchQuery:(query:string)=>set({searchQuery:query}),
}));
