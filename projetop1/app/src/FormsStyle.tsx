import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
    },
    inputContainer: {
      marginBottom: 16,
    },
    label: {
      fontSize: 16,
      marginBottom: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: "#ccc",
      padding: 8,
      width: "100%",
    },
    picker: {
      height: 50,
      width: "100%",
      marginVertical: 16,
    },
    selectedValueContainer: {
      marginVertical: 16,
    },
    resultado: {
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 16,
    },
    error: {
      color: "red",
      marginTop: 8,
    },
    title: { // Add the missing title style
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 16,
      },
  });
 
    
    export default styles;