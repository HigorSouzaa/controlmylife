import React from "react";
import { StyleSheet, View, Image, ActivityIndicator, Text } from "react-native";
import BottomSplashScreen from "./bottom_splash_screen"; // Componente responsável pela parte inferior do splash screen
import TopSplashScreen from "./top_splash_screen"; // Componente responsável pela parte superior do splash screen

// Componente principal para a tela de Splash
export default function SplashScreen() {
  return (
    <View style={styles.container}>
      {/* View principal que contém todo o layout */}

      <View style={styles.top}>
        {/* Componente que renderiza a parte superior do splash */}
        <TopSplashScreen />
      </View>

      <View style={styles.middle}>
        {/* Componente do meio que contém o logo e o indicador de carregamento */}
        <Image
          source={require("../../../assets/splash/LogoSplash.png")}
          style={styles.image}
        />
        <View style={styles.customIndicator}>
          {/* ActivityIndicator para mostrar o carregamento */}
          <ActivityIndicator size="large" color="#252b4d" />
        </View>
      </View>

      <View style={styles.bottom}>
        {/* Componente que renderiza a parte inferior do splash */}
        <BottomSplashScreen />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // O container principal ocupa toda a altura da tela
    backgroundColor: "#fef8ed", // Cor de fundo da tela de splash
  },
  top: {
    flex: 1, // O topo ocupa uma parte do espaço
  },
  middle: {
    flex: 2, // O meio ocupa duas partes do espaço total
    justifyContent: "center", // Centraliza verticalmente o conteúdo
    alignItems: "center", // Centraliza horizontalmente o conteúdo
    gap: 20, // Adiciona espaço entre o logo e o indicador de carregamento
  }, 
  bottom: {
    flex: 1, // O fundo ocupa uma parte do espaço
  },
  customIndicator: {
    marginTop: 20, // Espaço entre o logo e o indicador de carregamento
  },
  loadingText: {
    marginTop: 10, // Espaço entre o indicador de carregamento e o texto
    fontSize: 16, // Tamanho da fonte do texto
    color: "#252b4d", // Cor do texto
  },
});
