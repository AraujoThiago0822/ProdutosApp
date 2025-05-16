# 🛍️ ProdutosApp - Expo React Native

Este é um aplicativo simples em **React Native com Expo** que exibe uma lista de produtos ao estilo cartão (card). Ideal para estudos de UI, componentes reutilizáveis e manipulação de imagens locais com o Expo.

---

## 📱 Demonstração


![TELA DE INICIO](https://github.com/user-attachments/assets/a56c960b-0941-4490-8181-812cfba1de7b)
![MENSAGEM DE ALERTA](https://github.com/user-attachments/assets/1ded859d-0a98-45b5-ad9e-81422c553f5e)

---

## 🚀 Tecnologias Utilizadas

- React Native
- Expo CLI
- Componentização com Props
- Alerta com `Alert.alert()`
- Estilo com `StyleSheet`

---

## ⚠️ Atenção sobre o Alert

> **O alerta (`Alert.alert`) não funciona no modo web (navegador)**.

Esse é um comportamento conhecido do React Native. A API `Alert` é compatível com **Android** e **iOS**, mas **não é suportada no navegador** (`react-native-web`), pois depende de elementos nativos do sistema operacional que não existem no ambiente web.

✅ Para testar corretamente, utilize:
- **Emulador Android/iOS**
- **Dispositivo físico com o app Expo Go**




