type FakeDateApi = {
    discount: {
        id: number
        source: any
    }[]
    products: {
        id: number
        name: string
        description: string
        price: number
        category: string
        source: any
    }[]
    categories: {
        id: number
        source: any
        name: "Hoodies" | "Shirts" | "Shoes" | "Watches"
    }[]
}
export const fakeDataApi: FakeDateApi = {
    discount: [
        {
            id: 1,
            source: require("../assets/img/discount1.png"),
        },
        {
            id: 2,
            source: require("../assets/img/formen1.png"),
        },
        {
            id: 3,
            source: require("../assets/img/formen2.png"),
        },
    ],
    products: [
        {
            id: 1,
            name: "Shoe 1",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 55.2,
            category: "Shoes",
            source: require("../assets/img/shoe1.jpeg"),
        },
        {
            id: 2,
            name: "Shoe 2",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 43.1,
            category: "Shoes",
            source: require("../assets/img/shoe2.jpg"),
        },
        {
            id: 3,
            name: "Shoe 3",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 76.4,
            category: "Shoes",
            source: require("../assets/img/shoe3.png"),
        },
        {
            id: 4,
            name: "Shoe 4",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 56,
            category: "Shoes",
            source: require("../assets/img/shoe4.png"),
        },
        {
            id: 5,
            name: "Shoe 5",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 98.6,
            category: "Shoes",
            source: require("../assets/img/shoe5.png"),
        },
        {
            id: 6,
            name: "Shoe 6",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 92.3,
            category: "Shoes",
            source: require("../assets/img/shoe6.jpg"),
        },
        {
            id: 7,
            name: "Shirt 1",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 23.5,
            category: "Shirts",
            source: require("../assets/img/shirt1.jpg"),
        },
        {
            id: 8,
            name: "Shirt 2",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 43.1,
            category: "Shirts",
            source: require("../assets/img/shirt2.jpg"),
        },
        {
            id: 9,
            name: "Shirt 3",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 35.7,
            category: "Shirts",
            source: require("../assets/img/shirt3.png"),
        },
        {
            id: 10,
            name: "Shirt 4",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 51,
            category: "Shirts",
            source: require("../assets/img/shirt4.png"),
        },
        {
            id: 11,
            name: "Shirt 5",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 76.3,
            category: "Shirts",
            source: require("../assets/img/shirt4.png"),
        },
        {
            id: 12,
            name: "Shirt 6",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 92,
            category: "Shirts",
            source: require("../assets/img/shirt6.jpg"),
        },
        {
            id: 13,
            name: "Watch 1",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 86.3,
            category: "Watches",
            source: require("../assets/img/watch1.jpg"),
        },
        {
            id: 14,
            name: "Watch 2",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 21.2,
            category: "Watches",
            source: require("../assets/img/watch2.png"),
        },
        {
            id: 15,
            name: "Watch 3",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 67.7,
            category: "Watches",
            source: require("../assets/img/watch3.jpeg"),
        },
        {
            id: 16,
            name: "Watch 5",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 53.6,
            category: "Watches",
            source: require("../assets/img/watch4.jpg"),
        },
        {
            id: 17,
            name: "Watch 5",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 87.9,
            category: "Watches",
            source: require("../assets/img/watch5.jpg"),
        },
        {
            id: 18,
            name: "Watch 6",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 47.2,
            category: "Watches",
            source: require("../assets/img/watch6.jpg"),
        },
        {
            id: 19,
            name: "Hoodie 1",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 32.9,
            category: "Hoodies",
            source: require("../assets/img/hoodie1.jpg"),
        },
        {
            id: 20,
            name: "Hoodie 2",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 22.4,
            category: "Hoodies",
            source: require("../assets/img/hoodie2.png"),
        },
        {
            id: 21,
            name: "Hoodie 3",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 44.6,
            category: "Hoodies",
            source: require("../assets/img/hoodie3.png"),
        },
        {
            id: 22,
            name: "Hoodie 4",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 75,
            category: "Hoodies",
            source: require("../assets/img/hoodie4.jpeg"),
        },
        {
            id: 23,
            name: "Hoodie 5",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 45,
            category: "Hoodies",
            source: require("../assets/img/hoodie5.jpeg"),
        },
        {
            id: 24,
            name: "Hoodie 6",
            description:
                "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntlorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
            price: 47.2,
            category: "Hoodies",
            source: require("../assets/img/hoodie6.png"),
        },
    ],
    categories: [
        {
            id: 1,
            name: "Hoodies",
            source: require("../assets/img/hoodie1.jpg"),
        },
        {
            id: 2,
            name: "Shirts",
            source: require("../assets/img/shirt1.jpg"),
        },
        {
            id: 3,
            name: "Shoes",
            source: require("../assets/img/shoe1.jpeg"),
        },
        {
            id: 4,
            name: "Watches",
            source: require("../assets/img/watch1.jpg"),
        },
    ],
}
