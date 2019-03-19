// Scale
import { pxToRem } from '../utils/scale';

// Themes
const primaryTheme = {
    colors: {
        primary: "#1a81ff",
        danger: "#ff3333",
        info: "#05cdfa",
        success: "#159d79",
        default: "#373f49",
        white: "#ffffff",
        black: "#1a1a1a",
        greyLight: "#f2f2f2",
        greyMedium: "#999999",
        greyDark: "#333333",
        hover: {
            primary: "#54a0ff",
            danger: "#ff6b6b",
            info: "#48dbfb",
            success: "#18bb90",
            default: "#576574",
            white: "#ffffff",
            black: "#000000"
        },
        active: {
            primary: "#0069ed",
            danger: "#9e0000",
            info: "#05b2d8",
            success: "#11775c",
            default: "#111111",
            white: "#f2f2f2",
            black: "#1a1a1a"
        }
    },
    spacing: {
        none: "0",
        xxs: pxToRem(3),
        xs: pxToRem(5),
        xsm: pxToRem(8),
        sm: pxToRem(10),
        md: pxToRem(15),
        lg: pxToRem(20),
        xlg: pxToRem(25),
        xg: pxToRem(30),
        xxg: pxToRem(50)
    },
    fontSize: {
        none: "0",
        xs: pxToRem(12),
        sm: pxToRem(14),
        md: pxToRem(16),
        lg: pxToRem(18),
        xg: pxToRem(20),
    },
    rounded: {
        none: "0",
        sm: "3px",
        mdLeft: "5px 0 0 5px",
        mdRight: "0 5px 5px 0",
        md: "5px",
        lg: "10px",
        full: "100%"
    }
}

export {
    primaryTheme
}