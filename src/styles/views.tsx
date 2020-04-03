import { shadow, darkGrey, white } from "./colors";

export const borderRadius = 6;

export const row = {
  borderRadius: borderRadius,
  width: "100%",
  backgroundColor: white,
  padding: 20,
  marginTop: 10,
  zIndex: 10
};

export const dropShadow = {
  shadowColor: darkGrey,
  margin: 8,
  shadowOffset: {
    width: 2,
    height: 4
  },
  shadowOpacity: 0.4,
  shadowRadius: 3,
  elevation: 10
};

export const innerShadow = {
  shadowColor: shadow,
  shadowOffset: {
    width: 0,
    height: 6.27
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,
  elevation: 10
};
export const defaultInput = {
  height: 40,
  borderColor: darkGrey,
  borderWidth: 1,
  borderRadius: 6,
  paddingLeft: 10,
  color: darkGrey,
  marginBottom: 16
};
