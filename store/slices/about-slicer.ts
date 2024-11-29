import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AboutState {
  username: string;
  gender: string;
  birthday: string;
  horoscope: string;
  zodiac: string;
  height: number | string;
  weight: number | string;
}

const initialState = {
  username: (() => {
    if (typeof window !== "undefined") {
      const username = localStorage.getItem("username");
      return username ? JSON.parse(username) : "";
    }
    return "";
  })(),
  gender: (() => {
    if (typeof window !== "undefined") {
      const gender = localStorage.getItem("gender");
      return gender ? JSON.parse(gender) : "";
    }
    return "";
  })(),
  birthday: (() => {
    if (typeof window !== "undefined") {
      const birthday = localStorage.getItem("birthday");
      return birthday ? JSON.parse(birthday) : "";
    }
    return "";
  })(),
  horoscope: (() => {
    if (typeof window !== "undefined") {
      const horoscope = localStorage.getItem("horoscope");
      return horoscope ? JSON.parse(horoscope) : "";
    }
    return "";
  })(),
  zodiac: (() => {
    if (typeof window !== "undefined") {
      const zodiac = localStorage.getItem("zodiac");
      return zodiac ? JSON.parse(zodiac) : "";
    }
    return "";
  })(),
  height: (() => {
    if (typeof window !== "undefined") {
      const height = localStorage.getItem("height");
      return height ? JSON.parse(height) : "";
    }
    return "";
  })(),
  weight: (() => {
    if (typeof window !== "undefined") {
      const weight = localStorage.getItem("weight");
      return weight ? JSON.parse(weight) : "";
    }
    return "";
  })(),
};

const aboutSlice = createSlice({
  name: "about",
  initialState,
  reducers: {
    setAboutData: (state, action: PayloadAction<AboutState>) => {
      const updatedState = { ...state, ...action.payload };
      localStorage.setItem("aboutData", JSON.stringify(updatedState)); // Save the new state to localStorage
      return updatedState;
    },
  },
});

export const { setAboutData } = aboutSlice.actions;
export default aboutSlice.reducer;
