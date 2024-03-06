import { ScrollView } from "react-native";

import { styles } from "./styles";

import { Ingredient } from "../Ingredient";
import { useState } from "react";



export function Ingredients() {
    //obs: showsVerticalScrollIndicator(Serve para tirar a barra vertical)

    const [selected, setSelected] = useState<string[]>([]);

    //Filtrando os objetos selecionados
    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }
        setSelected((state) => [...state, value])
        console.log(selected)
    }


    return (
        <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
            {Array.from({ length: 100 }).map((item, index) => (
                <Ingredient 
                    key={index} 
                    name="Tomate" 
                    image="" 
                    selected={selected.includes(String(index))}
                    onPress={() => handleToggleSelected(String(index))} 
                />
            ))}
        </ScrollView>
    );
}