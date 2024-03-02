

type ApiCreateInvoiceType = {
    number: string
    billed_date: string
    due_date: string
    send_date: string

    variable_symbol?: string
    constant_symbol?: string
    specific_symbol?: string

    order_id?: number

    billed_client_id: number
    items: {
        name: string,
        price: string,
        quantity: number,
    }[]

    // payment: PaymentPickerPaymentType
    bank_transfer?: {
        name: string
        code: string
        iban: string
        swift: string
    }

    note?: string

    totalPrice: number
    // currency_3_code: CurrencyPickerCurrencyType
    // language_2_code: LanguagePickerLanguageType
}

export default ApiCreateInvoiceType;
