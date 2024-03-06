import { View, Text, ScrollView, Alert} from "react-native";

import { styles } from "./styles"
import { Selected } from "@/components/selected";
import {  useState } from "react";
import { Ingredient } from "@/components/Ingredient";

export default function Index() {

    const [selected, setSelected] = useState<string[]>([]);


    //Filtrando os objetos selecionados
    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }
        setSelected((state) => [...state, value])
        console.log(selected)
    }

    function handlerClearSelected(){
        debugger
        Alert.alert("Limpar", "Deseja limpar tudo?", [
            {text: "Não", style: "cancel"},
            {text: "Sim", onPress: () => setSelected([]) },
        ])
        
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha{"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

            {/* //Lista */}
            <ScrollView contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}>

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

            <Selected
                quantity={selected.length}
                onClear={handlerClearSelected}
                onSearch={() => { }}
            />
        </View>
    )
}