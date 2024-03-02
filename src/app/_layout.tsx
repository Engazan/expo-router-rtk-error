import "../global.css";
import "../translations/translations";
import React from "react";
import {SplashScreen, Stack} from "expo-router";
import {Provider} from "react-redux";
import {persistor, store} from "@/redux/store";
import {PersistGate} from 'redux-persist/integration/react'
import * as Font from 'expo-font';
import {AntDesign, Entypo, FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons} from "@expo/vector-icons";
import i18n from "i18next";
import {getLocales} from "expo-localization";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {NotifierWrapper} from "react-native-notifier";
import {SheetProvider} from "react-native-actions-sheet";
import {View} from "react-native";

export default () => {

    const [appIsReady, setAppIsReady] = React.useState(false);

    React.useEffect(() => {
        async function prepare() {

            /* custom fonts */
            await Font.loadAsync({
                'Noyh-Light': require('../../assets/fonts/Noyh/Noyh-Light.ttf'),
                'Noyh-Medium': require('../../assets/fonts/Noyh/Noyh-Medium.ttf'),
                'Noyh-Black': require('../../assets/fonts/Noyh/Noyh-Black.ttf'),
            })

            /* fonts preload */
            await Font.loadAsync(FontAwesome.font);
            // await Font.loadAsync(FontAwesome5.font); // this sometimes crash ..., why ? :(
            await Font.loadAsync(AntDesign.font);
            await Font.loadAsync(MaterialIcons.font);
            await Font.loadAsync(MaterialCommunityIcons.font);
            await Font.loadAsync(Ionicons.font);
            await Font.loadAsync(Entypo.font);

            setAppIsReady(true);
        }

        prepare();
    }, []);

    const onLayoutRootView = React.useCallback(async () => {
        if (appIsReady) {
            await SplashScreen.hideAsync();
        }
    }, [appIsReady]);

    if (!appIsReady) {
        return null;
    }

    console.log('MAIN LAYOUT')

    return (
        <Provider store={store}>
            <PersistGate
                persistor={persistor}
                onBeforeLift={() => {
                   
                }}
            >
                <GestureHandlerRootView className={'flex flex-1'}>
                    <NotifierWrapper>
                        <SheetProvider>
                            <View
                                className={'flex flex-1'}
                                onLayout={onLayoutRootView}
                            >
                                <Stack
                                    screenOptions={{
                                        headerShown: false
                                    }}
                                />
                            </View>
                        </SheetProvider>
                    </NotifierWrapper>
                </GestureHandlerRootView>
            </PersistGate>
        </Provider>
    );
}
