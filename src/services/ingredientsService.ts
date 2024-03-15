import { supabase } from "./supabase";

//trazendo todos os ingredients do supabase(.select()) e ordenando pelo nome
async function findAll(){
    debugger
    const { data } = await supabase
        .from("Ingredients")
        .select()
        .order("name")
        .returns<IngredientResponse[]>();
    return data ?? [];

    //returns: está retornando um objeto de arrays[], que está sendo tipado no arquivo ingredientsService.type
}

async function findByRecipeId(id: string){
    const {data} = await supabase
        .from("recipes_ingredients")
        .select("Ingredients (id, name, image)")
        .eq("recipe_id", id)
        .returns<{ ingredients: IngredientResponse}[]>()

        return data ? data.map((item) => item.ingredients) : []
}

async function findByIds(ids: string[]){
    const {data} = await supabase
        .from("Ingredients")
        .select()
        .in("id", ids)
        .order("name")
        .returns<IngredientResponse[]>()

    return data ?? []
}

export {findByRecipeId, findAll, findByIds }