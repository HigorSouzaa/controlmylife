// Importa os módulos necessários do React Native
import { StyleSheet, View, Image } from "react-native";

// Componente TopSplashScreen que renderiza a parte superior do splash screen
export default function TopSplashScreen() {
  return (
    <View style={styles.container}>
      {/* Imagem localizada na parte superior esquerda */}
      <Image
        source={require("../../../assets/splash/cimaEsquerda.png")} // Caminho da imagem no projeto
        style={styles.image} // Estilo aplicado à imagem
      />
      {/* Imagem localizada na parte superior direita */}
      <Image
        source={require("../../../assets/splash/cimaDireita.png")} // Caminho da imagem no projeto
        style={styles.image} // Estilo aplicado à imagem
      />
    </View>
  );
}

// Estilos utilizados no componente
const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz o container ocupar todo o espaço disponível
    width: "100%", // Define que o container terá 100% da largura da tela
    justifyContent: "space-between", // Distribui as imagens uniformemente entre os extremos (esquerda e direita)
    flexDirection: "row", // Define que os elementos filhos ficarão alinhados em linha
  },
});
