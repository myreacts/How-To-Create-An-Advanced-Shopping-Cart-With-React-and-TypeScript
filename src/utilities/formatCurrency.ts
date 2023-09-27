const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'CNY',
})

export function formatCurrency(value: number) {
    return CURRENCY_FORMATTER.format(value)
}