import { extendTheme } from "@chakra-ui/react";
import "@fontsource/montserrat";

export const theme = extendTheme({
    colors:{
        primary:{
            100:"#EBE6F2",
            200:"#CEBEDF",
            300:"#9377AF",
            400:"#604080",
            500:"#331551"
        },
        secondary:{
            100:"#FAEDE1",
            200:"#FAD3AF",
            300:"#F8B270",
            400:"#F89337",
            500:"#EC8200"
        }
    },
    fonts:{
        heading:`'Montserrat', sans-serif`,
        body:`'Montserrat', sans-serif`,
    }
})