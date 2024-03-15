import { View, Text, ScrollView } from "react-native";
import { router } from "expo-router";

import { services } from "@/services"

import { styles } from "./styles"
import { Selected } from "@/components/selected";
import { useEffect, useState } from "react";
import { Ingredient } from "@/components/Ingredient";
import CustomAlert from "@/components/Alert";

export default function Index() {

    const [selected, setSelected] = useState<string[]>([]);
    const [alertVisible, setAlertVisible] = useState(false);
    const [ingredients, setIngredients] = useState<IngredientResponse[]>([]);

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
    router.navigate("/recipes/"+ selected)
  }

  
  useEffect(() => {
    var teste = services.ingredients.findAll().then(setIngredients)
    console.log(teste)
   
  }, [])
  

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha{"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>Descubra receitas baseadas nos produtos que você escolheu.</Text>

            {/* //Lista */}
            <ScrollView contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}>

                {ingredients.map((item) => (
                    <Ingredient
                        key={item.id}
                        name={item.name}
                        image={`${services.storage.imagePath}/${item.image}`}
                        selected={selected.includes(item.id)}
                        onPress={() => handleToggleSelected(item.id)}
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