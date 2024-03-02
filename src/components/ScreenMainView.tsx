import {View} from "react-native";
import {useSafeAreaInsets} from "react-native-safe-area-context";

const ScreenMainView = (props) => {

    const insets = useSafeAreaInsets();

    return (
        <View
            className="flex flex-1 bg-backgroundLight dark:bg-backgroundDark"
        >
            {/* SafeAreaView alternative */}
            <View
                className="flex flex-1"
                style={{
                    marginTop: insets.top,
                }}
            >
                {props.children}
            </View>
        </View>
    );
}


export default ScreenMainView;
