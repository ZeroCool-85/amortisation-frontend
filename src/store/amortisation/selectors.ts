export const initialState = {
    loading: false,
    error: undefined,
    amortisation: undefined
}

export const getAmortisation = (state: any) => state?.amortisation?.amortisation || initialState.amortisation
export const getAmortisationLoading = (state: any) => state?.amortisation?.loading || initialState.loading
export const getAmortisationError = (state: any) => state?.amortisation?.error || initialState.error
