import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {store} from "@/redux/store";

const BASE_URL = 'https://localhost.app/api';

export const ApiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
        prepareHeaders: async (headers) => {

            const token = store.getState().auth.token;
            if (token !== null) {
                headers.set('Authorization', `Bearer ${token}`)
            }

            // headers.set('Content-Type', 'application/json')
            headers.set('Accept', 'application/json')

            return headers
        },
        responseHandler: async (response) => {
            if (response.status === 401) {
                store.dispatch({type: 'USER_LOGOUT'});
                return response.json();
            }

            return response.json();
        },
    }),
    tagTypes: [
        'Companies'
    ],
    endpoints: (builder) => ({})
})

export const {} = ApiSlice;
export {BASE_URL};
