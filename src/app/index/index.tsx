import { View, Text, ScrollView, Alert } from "react-native";
import { Router, router } from "expo-router";

import { styles } from "./styles"
import { Selected } from "@/components/selected";
import { useState } from "react";
import { Ingredient } from "@/components/Ingredient";
import CustomAlert from "@/components/Alert";

export default function Index() {

    const [selected, setSelected] = useState<string[]>([]);
    const [alertVisible, setAlertVisible] = useState(false);

    //Filtrando os objetos selecionados
    function handleToggleSelected(value: string) {
        if (selected.includes(value)) {
            return setSelected((state) => state.filter((item) => item !== value))
        }
        setSelected((state) => [...state, value])
        console.log(selected)
    }

     // Função para limpar a seleção
  function handlerClearSelected() {
    setAlertVisible(true);
  }

  // Função para confirmar limpar a seleção
  function handleConfirmClearSelected() {
    setSelected([]);
    setAlertVisible(false);
  }

  // Função para cancelar limpar a seleção
  function handleCancelClearSelected() {
    setAlertVisible(false);
  }

  function handleSearch(){
    router.navigate("/recipes/")
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
            {selected.length > 0 && (
                <Selected
                    quantity={selected.length}
                    onClear={handlerClearSelected}
                    onSearch={handleSearch}
                />
            )}

            <CustomAlert
                visible={alertVisible}
                title="Limpar"
                message="Deseja limpar tudo?"
                onCancel={handleCancelClearSelected}
                onConfirm={handleConfirmClearSelected}
            />

        </View>
    )
}