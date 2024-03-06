import { Pressable, PressableProps, Text, Image } from "react-native";
import { styles } from "./styles";

export type IngredientProps = {
    name: string
    image: string
    selected?: boolean

}

export function Ingredient({name, image, selected=false, ...rest}: IngredientProps & PressableProps){
    return(
        //Pressable é um componente que interage através do toque.
        <Pressable style={[styles.container, selected && styles.selected]} {...rest}>
            <Image 
                source={require("@/assets/tomato (1).png")}
                style={styles.image}
            />
            <Text style={styles.tittle}>Maçã</Text>
        </Pressable>
    );
}