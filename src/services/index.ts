//importe tudo de ingredientsService
import * as ingredients from "./ingredientsService"
import * as recipes from "./recipesService"
import * as preparations from "./preparationsService"

export const services = {
    ingredients,
    recipes,
    preparations,

    //Criando um storage para buscar a imagem no banco
    storage: {
        imagePath:"https://mxmhjuyqcmdgclyvhmwo.supabase.co/storage/v1/object/public/ingredients",
    },
}