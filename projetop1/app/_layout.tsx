import React, { useState } from "react";
import { SafeAreaView, Text, TextInput, Button, View } from "react-native";
import { Picker } from "@react-native-picker/picker"; // Import Picker
import styles from "./src/FormsStyle";

export default function HomePage() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);
  const [erro, setErro] = useState<string | null>(null);
  const [selectedValue, setSelectedValue] = useState('somar'); // State for Picker

  // Função para realizar a operação
  const DoisNum = () => {
    // Converte os valores de entrada para números
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    // Verifica se os valores são números válidos
    if (isNaN(n1) || isNaN(n2)) {
      setErro('Por favor, insira números válidos.');
      setResultado(null);
    } else {
      if(selectedValue === "somar"){
        const soma = n1 + n2;
        setResultado(soma);
        setErro('');
      }
      
      else if(selectedValue === "dividir"){
        const divisao = n1 / n2;
        setResultado(divisao);
        setErro('');
      }
      
      else if(selectedValue === "Mult"){
        const multiplicacao = n1 * n2;
        setResultado(multiplicacao);
        setErro('');
      }
      
      else if(selectedValue === "sub"){
        const subtracao = n1 - n2;
        setResultado(subtracao);
        setErro('');
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Escolha uma operação aritmética:</Text>
      <Picker
        selectedValue={selectedValue}
        style={styles.picker}
        onValueChange={(itemValue) => setSelectedValue(itemValue)}
      >
        <Picker.Item label="Adição" value="somar" />
        <Picker.Item label="Divisão" value="dividir" />
        <Picker.Item label="Multiplicação" value="Mult" />
        <Picker.Item label="Subtrair" value="sub" />
      </Picker>
      <View style={styles.selectedValueContainer}>
        <Text>
          Operação Selecionada: {selectedValue}
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número 1:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={num1}
          onChangeText={setNum1}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Número 2:</Text>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={num2}
          onChangeText={setNum2}
        />
      </View>
      <Button title="Somar" onPress={DoisNum} />
      {erro ? <Text style={styles.error}>{erro}</Text> : null}
      {resultado !== null && (
        <Text style={styles.resultado}>Resultado: {resultado}</Text>
      )}
    </SafeAreaView>
  );
}