import { colors } from "./colors";
import types from "./type";

export const theme = {
  colors: colors,
  spaceUnit: "8px",
  borderRadius: "8px",
};

export const fontSize = (props) => {
  if (props.xxxxs) {
    return types.fontSizeXXXXSmall;
  } else if (props.xxxs) {
    return types.fontSizeXXXSmall;
  } else if (props.xxs) {
    return types.fontSizeXXSmall;
  } else if (props.xs) {
    return types.fontSizeXSmall;
  } else if (props.s) {
    return types.fontSizeSmall;
  } else if (props.m) {
    return types.fontSizeMedium;
  } else if (props.l) {
    return types.fontSizeLarge;
  } else if (props.xl) {
    return types.fontSizeXLarge;
  } else if (props.xxl) {
    return types.fontSizeXXLarge;
  } else if (props.xxxl) {
    return types.fontSizeXXXLarge;
  } else {
    return types.fontSizeBase;
  }
};
