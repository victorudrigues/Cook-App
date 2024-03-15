import { supabase } from "./supabase";

//trazendo todos os ingredients do supabase(.select()) e ordenando pelo nome
export async function findAll(){
    debugger
    const { data } = await supabase.from("Ingredients").select().order("name")
    .returns<IngredientResponse[]>();
    return data ?? [];

    //returns: está retornando um objeto de arrays[], que está sendo tipado no arquivo ingredientsService.type
}