import p1 from './ProductImages/Product1.jpeg'
import p2 from './ProductImages/Product2.jpeg'
import p3 from './ProductImages/Product3.jpeg'
import p4 from './ProductImages/Product4.jpeg'
import p5 from './ProductImages/Product5.jpeg'
import p6 from './ProductImages/Product6.jpeg'
import p7 from './ProductImages/Product7.jpeg'
import p8 from './ProductImages/Product8.jpeg'
import p9 from './ProductImages/Product9.jpeg'
import p10 from './ProductImages/Product10.jpeg'
import p11 from './ProductImages/Product11.jpg'
import p12 from './ProductImages/Product12.jpg'
import p13 from './ProductImages/Product13.jpg'
import p14 from './ProductImages/Product14.jpg'
import p15 from './ProductImages/Product15.jpg'
import p16 from './ProductImages/Product16.jpg'
import p17 from './ProductImages/Product17.jpg'
import p18 from './ProductImages/Product18.jpg'
import p19 from './ProductImages/Product19.jpg'
import p20 from './ProductImages/Product20.jpg'
import p21 from './ProductImages/Product21.jpg'
import p22 from './ProductImages/Product22.jpg'
import p23 from './ProductImages/Product23.jpg'
import p24 from './ProductImages/Product24.jpg'
import p25 from './ProductImages/Product25.jpg'
import p26 from './ProductImages/Product26.jpg'
import p27 from './ProductImages/Product27.jpg'
import p28 from './ProductImages/Product28.jpg'
import p29 from './ProductImages/Product29.jpg'
import p30 from './ProductImages/Product30.jpg'
import p31 from './ProductImages/Product31.jpg'
import p32 from './ProductImages/Product32.jpg'
import p33 from './ProductImages/Product33.jpg'
import p34 from './ProductImages/Product34.jpg'
import p35 from './ProductImages/Product35.jpg'
import p36 from './ProductImages/Product36.jpg'
import p37 from './ProductImages/Product37.jpg'
import p38 from './ProductImages/Product38.jpg'
import p39 from './ProductImages/Product39.jpg'
import p40 from './ProductImages/Product40.jpg'
import p41 from './ProductImages/Product41.png'

let all_product = [
    {
        id: 1,
        name: "Stretch Cotton Slim Fit Short Sleeve Shirt",
        category: "mens",
        sub_category: "formal",
        image: p1,
        new_price: " 5000",
        old_price: " 5800",
        brand:"Calvin Klein",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 2,
        name: "Cotton Stretch Slim Button-Down Shirt",
        category: "mens",
        sub_category: "formal",
        image: p2 ,
        new_price: " 5500",
        old_price: " 6000",
        brand:"Calvin Klein",
        on_sale: false,
        new_arrival: true
        
    },
    {
        id: 3,
        name: "Signature 90s Trucker",
        category: "mens",
        sub_category: "party",
        image: p3,
        new_price: " 10000",
        old_price: " 11500",
        brand: "Calvin Klein",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 4,
        name: "Denim Print Tailored Trouser",
        category: "mens",
        sub_category: "casual",
        image: p4,
        new_price: " 46000",
        old_price: " 47500",
        brand: "Calvin Klein",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 5,
        name: "Archive Logo Relaxed Crewneck T-Shirt",
        category: "mens",
        sub_category: "casual",
        image: p5,
        new_price: " 3000",
        old_price: " 3500",
        brand: "Calvin Klein",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 6,
        name: "Loose Denim Button-Down Shirt",
        category: "women",
        sub_category: "casual",
        image: p6 ,
        new_price: " 5900",
        old_price: " 7500",
        brand: "Calvin Klein",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 7,
        name: "Pure Poplin Shirt",
        category: "women",
        sub_category: "formal",
        image: p7 ,
        new_price: " 5200",
        old_price: " 5900",
        brand: "Calvin Klein",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 8,
        name: "New York Script Logo Graphic Slim Fit T-Shirt",
        category: "women",
        sub_category: "casual",
        image:p8 ,
        new_price: " 2600",
        old_price: " 3200",
        brand: "Calvin Klein",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 9,
        name: "Sherpa Jacket",
        category: "women",
        sub_category: "party",
        image: p9 ,
        new_price: " 11000",
        old_price: " 15500",
        brand: "Calvin Klein",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 10,
        name: "Original Skinny Fit Jeans",
        category: "women",
        sub_category: "party",
        image: p10,
        new_price: " 5900",
        old_price: " 7400",
        brand: "Calvin Klein",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 11,
        name: "BASIC HEAVY WEIGHT T-SHIRT ",
        category: "mens",
        sub_category: "party",
        image: p11,
        new_price: " 1850",
        old_price: " 2300",
        brand:"Zara",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 12,
        name: "COLOUR BLOCK POLO T-SHIRT WITH SLOGANS",
        category: "mens",
        sub_category: "party",
        image: p12,
        new_price: " 2950",
        old_price: " 3500",
        brand:"Zara",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 13,
        name: "TIE-DYE FLOWING SHIRT",
        category: "mens",
        sub_category: "casual",
        image: p13 ,
        new_price: " 4350",
        old_price: " 4800",
        brand:"Zara",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 14,
        name: "LEATHER-EFFECT JACKET",
        category: "mens",
        sub_category: "party",
        image:p14 ,
        new_price: " 10950",
        old_price: " 14550",
        brand:"Zara",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 15,
        name: "BALLOON FIT JEANS",
        category: "mens",
        sub_category: " ",
        image: p15,
        new_price: " 4300",
        old_price: " 5800",
        brand: "Zara",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 16,
        name: "LEATHER EFFECT CROPPED BIKER",
        category: "women",
        sub_category: "party",
        image: p16,
        new_price: " 4950",
        old_price: " 5200",
        brand:"Zara",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 17,
        name: "LEATHER EFFECT CROPPED BIKER",
        category: "women",
        sub_category: "casual",
        image: p17 ,
        new_price: " 2950",
        old_price: " 3400",
        brand:"Zara",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 18,
        name: "Z1975 WIDE LEG HIGH-RISE JEANS",
        category: "women",
        sub_category: "party",
        image: p18,
        new_price: " 3550",
        old_price: " 4000",
        brand: "Zara",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 19,
        name: "T-SHIRT WITH SLOGAN",
        category: "women",
        sub_category: "casual",
        image: p19,
        new_price: " 850",
        old_price: " 1100",
        brand: "Zara",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 20,
        name: "RIBBED LONG SLEEVE T-SHIRT",
        category: "women",
        sub_category: "gym",
        image: p20,
        new_price: " 1550",
        old_price: " 1800",
        brand: "Zara",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 21,
        name: "Cotton polo shirt with embroidery",
        category: "mens",
        sub_category: "party",
        image: p21,
        new_price: " 17497",
        old_price: " 19000",
        brand: "Gucci",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 22,
        name: "Maxi GG canvas shirt",
        category: "mens",
        sub_category: "party",
        image: p22,
        new_price: " 10375",
        old_price: " 12000",
        brand: "Gucci",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 23,
        name: "Technical cotton canvas hooded jacket",
        category: "mens",
        sub_category: "casual",
        image: p23,
        new_price: " 20634",
        old_price: " 28000",
        brand: "Gucci",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 24,
        name: "Nylon canvas reversible zip jacket",
        category: "mens",
        sub_category: "party",
        image: p24,
        new_price: " 26142",
        old_price: " 30000",
        brand: "Gucci",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 25,
        name: "Washed organic denim pant with GG",
        category: "mens",
        sub_category: "party",
        image: p25,
        new_price: " 15167",
        old_price: " 20000",
        brand: "Gucci",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 26,
        name: "Tweed damier jacket",
        category: "women",
        sub_category: "formal",
        image: p26,
        new_price: " 23519",
        old_price: " 25000",
        brand:"Gucci",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 27,
        name: "GG canvas jacket",
        category: "women",
        sub_category: "casual",
        image: p27,
        new_price: " 31073",
        old_price: " 33000",
        brand:"Gucci",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 28,
        name: "Oxford cotton shirt with GG Shadow",
        category: "women",
        sub_category: "formal",
        image: p28,
        new_price: " 7390",
        old_price: " 8000",
        brand:"Gucci",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 29,
        name: "Printed cotton jersey T-shirt",
        category: "women",
        sub_category: "casual",
        image: p29,
        new_price: " 4954",
        old_price: " 5500",
        brand:"Gucci",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 30,
        name: "Jumbo GG denim pants",
        category: "women",
        sub_category: "party",
        image: p30,
        new_price: " 13437",
        old_price: " 14000",
        brand:"Gucci",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 31,
        name: "Cropped Re-Nylon down jacket",
        category: "mens",
        sub_category: "casual",
        image: p31,
        new_price: " 15500",
        old_price: " 20500",
        brand: "Prada",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 32,
        name: "Aqua Cotton Shirt",
        category: "mens",
        sub_category: "formal",
        image: p32 ,
        new_price: " 15000",
        old_price: " 18000",
        brand: "Prada",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 33,
        name: "Relaxed fit denim jeans",
        category: "mens",
        sub_category: "casual",
        image: p33,
        new_price: " 17000",
        old_price: " 25000",
        brand: "Prada",
        on_sale: false  ,
        new_arrival: true
    },
    {
        id: 34,
        name: "Piqué polo shirt with Re-Nylon details",
        category: "mens",
        sub_category: "formal",
        image:p34 ,
        new_price: " 9000",
        old_price: " 15800",
        brand: "Prada",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 35,
        name: "Moleskin pants",
        category: "mens",
        sub_category: "party",
        image: p35 ,
        new_price: " 5000",
        old_price: " 6300",
        brand: "Prada",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 36,
        name: "Wide-legged corduroy pants",
        category: "women",
        sub_category: "party",
        image: p36 ,
        new_price: " 7400",
        old_price: " 8000",
        brand: "Prada",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 37,
        name: "Embroidered Oxford cotton and poplin shirt",
        category: "women",
        sub_category: "formal",
        image: p37,
        new_price: " 9000",
        old_price: " 12000",
        brand: "Prada",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 38,
        name: "Kid mohair bomber jacket with patches",
        category: "women",
        sub_category: "party",
        image:p38 ,
        new_price: " 25000",
        old_price: " 26500",
        brand: "Prada",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 39,
        name: "Light Re-Nylon jacket",
        category: "women",
        sub_category: "casual",
        image: p39,
        new_price: " 6300",
        old_price: " 7000",
        brand: "Prada",
        on_sale: false,
        new_arrival: true
    },
    {
        id: 40,
        name: "Printed jersey T-shirt",
        category: "women",
        sub_category: "casual",
        image:p40 ,
        new_price: " 2300",
        old_price: " 2700",
        brand: "Prada",
        on_sale: true,
        new_arrival: false
    },
    {
        id: 41,
        name: "Pink Shirt",
        category: "mens",
        sub_category: "formal",
        image:p41 ,
        new_price: " 3000",
        old_price: " 3500",
        brand: "Prada",
        on_sale: true,
        new_arrival: false
    },
];

export default all_product;