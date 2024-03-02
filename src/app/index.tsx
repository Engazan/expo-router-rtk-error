import React from "react";
import {Redirect} from "expo-router";
import {useIsNavigationReady} from "@/hooks/useIsNavigationReady";

export default () => {

    const isReady = useIsNavigationReady();
    console.log('isReady', isReady)

    if (!isReady) return null;

    console.log('Redirecting to LoginRoute');

    return <Redirect href={'/LoginRoute'}/>;
}
