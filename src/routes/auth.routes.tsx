import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { SignInDriver } from "@screens/Driver/signIn";
import { HomeScreen } from "@screens/Home";

type AuthRoutes = {
  home: undefined;
  signInDriver: undefined;
  signUpDriver: undefined;
  signInCompany: undefined;
  signUpCompany: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="home" component={HomeScreen} />
      <Screen name="signInDriver" component={SignInDriver} />
    </Navigator>
  );
}
