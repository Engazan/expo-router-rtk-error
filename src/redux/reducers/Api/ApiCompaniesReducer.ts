import {ApiSlice} from "@/redux/slices/ApiSlice";

const ApiCompaniesReducer = ApiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getSelectedCompany: builder.query({
            providesTags: ['Companies'],
            query: () => ({
                url: 'user/companies',
                method: 'GET',
            }),
            transformResponse: (response: any) => {
                return response.data.find((company: any) => company.default);
            }
        }),
    }),
});

export default ApiCompaniesReducer;
export const {
    useGetSelectedCompanyQuery,
} = ApiCompaniesReducer;
