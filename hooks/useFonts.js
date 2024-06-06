import * as Font from "expo-font";

export default useFonts = async () =>
  await Font.loadAsync({ Sanchez: require("../assets/Sanchez-Regular.ttf") });
