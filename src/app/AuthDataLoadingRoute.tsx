import ScreenMainView from "@/components/ScreenMainView";
import {ActivityIndicator, Text} from "react-native";
import React from "react";
import {useGetSelectedCompanyQuery} from "@/redux/reducers/Api/ApiCompaniesReducer";

export default () => {

    console.log('LAYOUT SCREEN')

    const useGetSelectedCompanyQueryResult = useGetSelectedCompanyQuery({});

    return (
        <ScreenMainView>

            <ActivityIndicator size="large" color="#0000ff" />

        </ScreenMainView>
    )
};
