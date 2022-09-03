const data = {
    productItems: [
        {
            id: 1,
            product: "Iphone SE",
            image: 'https://m.media-amazon.com/images/I/810DvHOZ9nL.jpg',
            category: "iphone",
            price: 556
        },
        {
            id: 2,
            product: "Iphone 13 pro max",
            image: 'https://www.powerplanetonline.com/cdnassets/iphone_13_pro_max_verde_alpino_01_l.jpg',
            category: "iphone",
            price: 1099
        },
        {
            id: 3,
            product: "Iphone 13 pro",
            image: 'https://www.reliancedigital.in/medias/Apple-iPhone-13-Pro-492849510-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0MDU5M3xpbWFnZS9qcGVnfGltYWdlcy9oOTMvaDllLzk3ODgwODI5NDYwNzguanBnfDIyMjUzYTY0NmI0OTEwNzliODE3NmE2YTA4MjJhNTIyMzc4ZGViMTFiNzcyMjE2MGI5MTUzNTdlNGU0ZDk1ZGU',
            category: "iphone",
            price: 899
        },
        {
            id: 4,
            product: "Iphone 13",
            image: 'https://static.toiimg.com/thumb/resizemode-4,msid-79058673,imgsize-200,width-1200/79058673.jpg',
            category: "iphone",
            price: 799
        },
        {
            id: 5,
            product: "Iphone 13 mini",
            image: 'https://fscl01.fonpit.de/devices/18/2018-w320h320.png',
            category: "iphone",
            price: 749
        },
        {
            id: 6,
            product: "Iphone 12 pro Max",
            image: 'https://m.media-amazon.com/images/I/71MHTD3uL4L.jpg',
            category: "iphone",
            price: 799
        },
        {
            id: 7,
            product: "Iphone 12 pro",
            image: 'https://assets.mspimages.in/c/tr:w-375,h-300,c-at_max/16037-272-5.jpg',
            category: "iphone",
            price: 749
        },
        {
            id: 8,
            product: "Iphone 12",
            image: 'https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901536-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w0NTIzNHxpbWFnZS9qcGVnfGltYWdlcy9oMzQvaGE1Lzk0MDc3NDY0NDEyNDYuanBnfDA3MmMxMTU3MzQ0M2ViMjdlMTMwNjlkZGMxOWMyNDViYjdiODJiYjZlNDExYzM4ZTQwYzQxOGZiNTk4MjMyNTk',
            category: "iphone",
            price: 700
        },
        {
            id: 9,
            product: "Iphone 12 mini",
            image: 'https://res-1.cloudinary.com/grover/image/upload/v1630928504/mfrp5hwlwr7qbtnjvfzq.png',
            category: "iphone",
            price: 649
        },
        {
            id: 10,
            product: "Ipad Air",
            image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-air-select-cell-purple-202203?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1645066504390',
            cateegory: "Ipad",
            price: 799
        },
        {
            id: 11,
            product: "Ipad Air 2",
            image: 'https://cdn.alloallo.media/catalog/product/apple/ipad/ipad-air-2/ipad-air-2-silver.jpg',
            category: "Ipad",
            price: 899
        },
        {
            id: 12,
            product: "Ipad Air 3",
            image: 'https://m.media-amazon.com/images/I/51ewd+Fq3TL._SL1024_.jpg',
            category: "Ipad",
            price: 999
        },
        {
            id: 13,
            product: "Ipad Air 4",
            image: 'https://www.deccanherald.com/sites/dh/files/articleimages/2020/09/16/apple-ipad-air-4-cs-2-888157-1600263860.jpg',
            category: "Ipad",
            price: 1099
        },
        {
            id: 14,
            product: "Ipad Mini",
            image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-mini-select-cell-starlight-202109_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1629840738000',
            category: "Ipad",
            price: 799
        },
        {
            id: 15,
            product: "Watch Series 7",
            image: "https://www.apple.com/newsroom/images/product/watch/standard/Apple_watch-series7-availability_hero_10052021_big.jpg.slideshow-xlarge_2x.jpg",
            category: "Accessories",
            price: 599
        },
        {
            id: 16,
            product: "Watch Series 6",
            image: 'https://i.gadgets360cdn.com/products/large/apple-watch-series-6-cellular-558x800-1600234981.jpg',
            category: "Accessories",
            price: 549
        },
        {
            id: 17,
            product: "Watch Series 5",
            image: 'https://www.apple.com/newsroom/images/tile-images/Apple_watch_series_5_introduces-always-on-retina-display_091019.jpg.landing-big_2x.jpg',
            category: "Accessories",
            price: 549
        },
        {
            id: 18,
            product: "Watch Series 4",
            image: 'https://m.media-amazon.com/images/I/51deGDOsgbL._SL1000_.jpg',
            category: "Accessories",
            price: 549
        },
        {
            id: 19,
            product: "Watch Series 3",
            image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/42-alu-silver-sport-white-nc-s3-grid?wid=540&hei=550&fmt=jpeg&qlt=90&.v=1594259786000',
            category: "Accessories",
            price: 549
        },
        {
            id: 20,
            product: "Watch Series 2",
            image: 'https://cellbuddy.in/wp-content/uploads/2019/12/s2-38mm-2.jpg',
            category: "Accessories",
            price: 549
        },
        {
            id: 21,
            product: "Watch Series",
            image: 'https://static.toiimg.com/thumb/resizemode-4,msid-54128624,imgsize-200,width-1200/54128624.jpg',
            category: "Accessories",
            price: 549
        }
    ]
}

export default data;