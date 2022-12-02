import bcrypt from 'bcryptjs';

const data = {
     users : [
        {
            name : 'Milan',
            email : 'admian@gmail.com',
            password : bcrypt.hashSync('admin'),
            isAdmin : true
        },
        {
            name : 'Reciepe',
            email : 'ricepwebg@gmail.com',
            password : bcrypt.hashSync('reciepe'),
            isAdmin : false
        }
     ],
    slideritems : [
        {
            _id : 1 ,
            image : '/image-4.jpg'
        },
        {
            _id : 2 ,
            image : '/image-2.jpg'
        },
        {
            _id : 3 ,
            image : '/image-3.jpg'
        }
    ],
    category : [
        {
            // _id : 1 ,
            title : 'Men',
            image : '/public/Men1.jpg'
        }, 
        {
            // _id : 2 ,
            title : 'Women',
            image : '/public/women2.jpg'
        },
        {
            // _id : 3 ,
            title : 'kids',
            image : '/public/kids3.jpg'
        }
    ],
    
    products : [
        {
            // _id : 1,
            title : 'Product 1',
            slug : 'product1',
            countinstock : 12,
            desc: 'Description for Product 1',
            category : 'Men',
            image :'/Amazon-Product-1.png',
            image1: '/Amazon-Product-11.png',
            image2: '/Amazon-Product-12.png',
            image3: '/Amazon-Product-13.png',
            price : "80.00",
        },
        {
            // _id : 2,
            title : 'Product 2',
            slug : 'product2',   
            countinstock : 6,
            desc: 'Description for Product 2',
            category : 'Women',
            image :'/Amazon-Product-4.png',
            image1: '/Amazon-Product-41.png',
            image2: '/Amazon-Product-42.png',
            image3: '/Amazon-Product-43.png',
            price : "65.00"
        },
        {
            // _id : 3,
            title : 'Product 3',
            slug : 'product3',
            countinstock : 9,
            desc: 'Description for Product 3',
            category : 'Kids',
            image :'/Amazon-Product-5.png',
            image1: '/Amazon-Product-51.png',
            image2: '/Amazon-Product-52.png',
            image3: '/Amazon-Product-53.png',
            price : "45.00"
        },
        {
            // _id : 4,
            title : 'Product 4',
            slug : 'product4',
            countinstock : 7,
            desc: 'Description for Product 4',
            category : 'Men',
            image :'/Amazon-Product-3.png',
            image1: '/Amazon-Product-31.png',
            image2: '/Amazon-Product-32.png',
            image3: '/Amazon-Product-33.png',
            price : "160.00"
        },
        {
            // _id : 5,
            title : 'Product 5',
            slug : 'product5',
            countinstock : 45,
            desc: 'Description for Product 5',
            category : 'Men',
            image :'/Amazon-Product-6.png',
            image1: '/Amazon-Product-61.png',
            image2: '/Amazon-Product-62.png',
            image3: '/Amazon-Product-63.png',
            price : "160.00"
        },
    ]
}

export default data;  



