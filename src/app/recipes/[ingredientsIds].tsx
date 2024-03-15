import { View, Text, FlatList } from "react-native";

import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { Recipe } from "@/components/Recipe";
import { Ingredients } from "@/components/Ingredients";
import { useEffect, useState } from "react";
import { services } from "@/services";


export default function Recipes() {
    //recuperar os parametros através da rota
    const params = useLocalSearchParams<{ingredientsIds: string}>();
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

    const [recipes, setRecipes] = useState<RecipeResponse[]>([]);
    
    const ingredientsId = params.ingredientsIds.split(",");
    

    useEffect(() => {
        //busco os ingredientes por id e atualiza os ingredients que foram selecionados
        services.ingredients.findByIds(ingredientsId).then(setIngredients);
    }, [])

    useEffect(() => {
        debugger
        //busco as receitas por id dos ingrdients e atualiza as receitas dos ingredientes que foram selecionados
        var teste = services.recipes.findByIngredientsIds(ingredientsId).then(setRecipes);

        console.log(teste)
        console.log(recipes)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <MaterialIcons
                    name="arrow-back"
                    size={32}
                    onPress={() => { router.back() }}
                />

                <Text style={styles.title}>Ingredientes</Text>
            </View>

           {/* mostrar ingredients selecionados */}
           <Ingredients ingredients={ingredients} />

            <FlatList
                data={recipes}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => (
                <Recipe recipe={item} onPressOut={() => router.navigate("/recipe/" + item.id)} />)}

                style={styles.recipes}
                contentContainerStyle={styles.recipesContent}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{gap:16}}
                numColumns={2}
                
            />
        </View>
    )

}