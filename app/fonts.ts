import { League_Gothic, Libre_Barcode_128_Text, Lekton, Lateef } from "next/font/google";

export const gothic = League_Gothic ({
    display: 'swap',
    subsets: ['latin'],
})

export const barcode = Libre_Barcode_128_Text ({
    subsets: ['latin'],
    display: "swap",
    weight: "400",
})

export const lekton = Lekton ({
    display: 'swap',
    subsets: ['latin'],
    weight: "400",
})

export const lateef = Lateef ({
    display: 'swap',
    subsets: ['latin'],
    weight: "400",
})