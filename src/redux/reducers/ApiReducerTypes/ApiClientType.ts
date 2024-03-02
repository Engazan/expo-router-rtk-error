type ApiClientInvoicesMetaDataType = {
    count: {
        total: number,
        paid: number,
        unpaid: number,
    },
    amount: {
        [key: string]: {
            total: number,
            paid: number,
            unpaid: number,
        },
    }
}

type ApiClientType = {
    id: number
    uuid: string
    user_id: number
    name: string
    state: string
    street: string
    street_extra?: string
    zip: string
    city: string

    identification_number: string // ico
    vat_identification_number: string //  dic
    vat_identification_number_sk?: string // icdph
    registry_info?: string

    contact_name?: string
    contact_phone?: string
    contact_email?: string
    contact_web?: string
    created_at: string
    updated_at?: string

    invoicesMetaData?: ApiClientInvoicesMetaDataType
}

export default ApiClientType;
export type {ApiClientInvoicesMetaDataType}
