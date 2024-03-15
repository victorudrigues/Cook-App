//importe tudo de ingredientsService
import * as ingredients from "./ingredientsService"

export const services = {
    ingredients,

    //Criando um storage para buscar a imagem no banco
    storage: {
        imagePath:"https://mxmhjuyqcmdgclyvhmwo.supabase.co/storage/v1/object/public/ingredients",
    },
}