import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  decimalText: '',
}

const bin2decSlice = createSlice({
  name: 'bin2dec',
  initialState,
  reducers: {
    setDecimalText: (state, action) => {
      state.decimalText = action.payload;
    },
    convertBinaryToDecimal: (state, action) => {
      const binaryText: string = action.payload;

      const reversedBinaryText = binaryText
        .split('')
        .map(Number) // Convert to a number from string
        .reverse()

      const result = reversedBinaryText.reduce(
        (accumulator, currentValue, idx) =>
          accumulator + currentValue * Math.pow(2, idx)
      );

      state.decimalText = result.toString();
    }
  }
})

export const { setDecimalText, convertBinaryToDecimal } = bin2decSlice.actions

export default bin2decSlice.reducer