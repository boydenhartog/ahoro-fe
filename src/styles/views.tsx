import { shadow, darkGrey } from "./colors";

export const radius = {
    borderRadius: 6,
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
  marginBottom: 16,
};