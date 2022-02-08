import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type SectionCategories = 'burgers' | 'beverages'

const initialState: {
    selectedSection: SectionCategories
} = {
    selectedSection: 'burgers'
}

const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        setSelectedSection(state, action: PayloadAction<{
            selectedSection: SectionCategories
        }>) {
            state.selectedSection = action.payload.selectedSection
        }
    }
})

export const { setSelectedSection } = homeSlice.actions

export default homeSlice.reducer