import React from "react";
import {Text, TouchableOpacity} from "react-native";
import ScreenMainView from "@/components/ScreenMainView";
import {useRouter} from "expo-router";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/redux/store";

export default () => {
    const router = useRouter();
    const {token} = useSelector((state: RootState) => state.auth, (left, right) => {
        return left.token === right.token;
    });
    const dispatch = useDispatch();

    return (
        <ScreenMainView>
            <Text>Login</Text>

            <TouchableOpacity
                className="p-4 text-primaryLight"
                style={{
                    backgroundColor: 'coral',
                }}
                onPress={() => {
                    router.replace('/AuthDataLoadingRoute');
                }}
            >
                <Text>LOGIN -> token</Text>
            </TouchableOpacity>
        </ScreenMainView>
    );
}
