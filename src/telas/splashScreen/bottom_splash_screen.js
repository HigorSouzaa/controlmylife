// Importa os módulos necessários do React Native
import { StyleSheet, View, Image } from "react-native";

// Componente BottomSplashScreen que renderiza a parte inferior do splash screen
export default function BottomSplashScreen() {
  return (
    <View style={styles.container}>
      {/* Imagem localizada na parte inferior esquerda */}
      <Image
        source={require("../../../assets/splash/baixoEsquerda.png")} // Caminho da imagem no projeto
        style={styles.image} // Estilo aplicado à imagem
      />
      {/* Imagem localizada na parte inferior direita */}
      <Image
        source={require("../../../assets/splash/baixoDireita.png")} // Caminho da imagem no projeto
        style={styles.image} // Estilo aplicado à imagem
      />
    </View>
  );
}

// Estilos utilizados no componente
const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o container ocupa o espaço correto
    width: "100%", // Define que o container terá 100% da largura da tela
    justifyContent: "space-between", // Distribui as imagens nos extremos (esquerda e direita)
    alignItems: "flex-end", // Posiciona os elementos no final do container (parte inferior)
    flexDirection: "row", // Alinha os elementos horizontalmente
  },
  image: {
    // Estilo inicial vazio para as imagens
  },
});
