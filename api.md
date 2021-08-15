# API list

all api list of `evaly.com.bd`

- **`GET:`** `https://api.evaly.com.bd/go-catalog/api/v1/public/campaign/categories`

    ```js
    data: [
        {
            banner_header_text: "Evaly Priority Store"
            banner_header_text_color: "#ffffff"
            banner_image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/ed025a43be9d-ca06258a-e977-458e-8467-f138874c6211.jpeg"
            banner_primary_bg_color: "#000000"
            banner_secondary_bg_color: "#000000"
            banner_sub_text: "Priority Services!"
            banner_sub_text_color: "#ffffff"
            banners: []
            campaigns: null
            category_id: 18
            description: "Priority Store"
            image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/17dcc5990b10-icon.png"
            name: "Evaly Priority Store"
            slug: "priority-store-244602da"
            status: "active"
            version: 1627915643
        },
    ]
    message: "Successful"
    next: ""
    previous: ""
    ```

- **`GET:`** `https://api.evaly.com.bd/ratings/api/v1/public/ads`

    ```js
    {message: "successful",…}
    data: {
        count: 7, 
        advertisement_list: [
            {
                advertise_id: 2014
                image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/ed4d2dc8f4ad-a3ab7a88-3421-4a76-b193-c3aff546fc7f.jpeg"
                name: "Wholesale Club101"
                slug: "wholesale-club101"
                status: "active"
                type: "banner"
                url: "https://evaly.com.bd/campaign/campaigns/priority-store-244602da/wholesale-club-24hrs-delivery-d5a554"
            },
        ]
    }
    message: "successful"
    ```

- **`GET:`** `https://api.evaly.com.bd/go-catalog/api/v1/public/express`

    ```js
    data: [
        {
            app_bg_color: ""
            app_logo: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/91670e23a9b9-e8471ea6-0034-42fb-9425-c80d0f643f72.jpeg"
            app_name: "Priority Express"
            image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/4ae02b7b9fb3-bceb49673fd8-whatsapp-image-2021-06-24-at-34124-pm.jpeg"
            name: "Priority Express"
            service_type: "permanent"
            slug: "priority-express"
        },
    ]
    message: "Successful"
    next: ""
    previous: ""
    ```

- **`GET:`** `https://api.evaly.com.bd/go-catalog/api/v1/public/shops?page=1&limit=15&category_slug=&payment_type=cod`
    <!-- https://api.evaly.com.bd/go-catalog/api/v1/public/shops?page=1&limit=15&category_slug=smart-phone-6430ca0e4 -->

    ```js
    data: [
        {
            address: "23 Rd 18, 23 Rd 18, Dhaka 1230, Bangladesh"
            approval: true
            cashback_percentage: 0
            description: ""
            is_cod_allowed: false
            logo_image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/64f8837d0362-armandy-kids.jpg"
            owner_name: "Adib Saiful Shanto"
            owner_username: "01994380011"
            score: 102
            shop_image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/95d1f6543205-Ecommerce_Banner.png"
            shop_name: "Armandy kids for Cash on Delivery Service"
            slug: "armandy-kids-for-cash-on-delivery-service"
        },
    ]
    message: "Successful"
    next: "/api/v1/public/shops?limit=15&page=2"
    previous: ""
    ```

- **`GET:`** `https://api.evaly.com.bd/go-catalog/api/v1/public/brands?limit=20&page=1`
    <!-- https://api.evaly.com.bd/go-catalog/api/v1/public/brands?limit=20&page=1&category=smart-phone-6430ca0e4 -->

    ```js
    data: [
        {
            approved: true
            brand_score: 263848467
            brand_type: "general"
            id: 23814
            image_url: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/5589bdef56ff-01.png"
            name: "Toyota"
            slug: "toyota-0d459e399"
            status: "active"
            version: 0
        }
    ]
    message: "Successful"
    next: "/api/v1/public/brands?limit=20&page=2"
    previous: ""
    ```

- **`GET:`** `https://evaly.com.bd/_next/data/8bgE6XV2mpBp9KosctPN_/express.json`

    ```js
    initialReduxState: {
        auth: {
            balance: 0
            giftCardBalance: 0
            holdingBalance: 0
            token: ""
            userData: {}
            userDataFromToken: {}
        },
        chat: {
            allRosters: []
            chatReadUnRead: []
            chatRoaster: []
            chatRosterLastMessage: []
            chatRosterPresence: []
            chatRosterVcard: []
            firstTimeLoadig: true
            invitations: []
            selectedRoster: {}
        },
        order: {
            isOpenCartView: false
            orderCart: []
        }
    },
    pageProps: {
        expressSercices: [
            {
                app_bg_color: ""
                app_logo: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/91670e23a9b9-e8471ea6-0034-42fb-9425-c80d0f643f72.jpeg"
                app_name: "Priority Express"
                image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/4ae02b7b9fb3-bceb49673fd8-whatsapp-image-2021-06-24-at-34124-pm.jpeg"
                name: "Priority Express"
                service_type: "permanent"
                slug: "priority-express"
            }
        ]
    },
    __N_SSG: true
    ```

- **`GET:`** `https://api.evaly.com.bd/core/delivered/orders/not-confirmed/?get_count=true` // FIXME: need token

    ```js
    {
        message: "Invalid token type"
    }
    ```

- **`POST:`** `https://api.evaly.com.bd/eauth/api/v1/auth/token/refresh` // FIXME: need to login

    ```js
    {
        code: "400",
        message: "refresh_token field is required"
    }
    ```

- **`GET:`** `https://api.evaly.com.bd/go-catalog/api/v1/public/products?page=1&limit=12&category=${categorySlug[0]}`
    <!-- https://api.evaly.com.bd/go-catalog/api/v1/public/products?page=1&limit=20&brand=samsung-27cca49c9&category=smart-phone-6430ca0e4 -->
    <!-- https://api.evaly.com.bd/go-catalog/api/v1/public/products?page=1&limit=20&search=test&brand=samsung-27cca49c9&category=smart-phone-6430ca0e4 -->

    ```js
    const categorySlug = [
        'tools-diy-outdoor-76c5eb3fd',
        'travel-tours-99219fee5',
        'security-safe-ae6f0ab7f',
        'digital-goods-2537caa36',
        'home-appliance-74701b133',
        'event-media-4c778a622',
        'service-cc45c2b85',
        'fashion-for-men-bee82e9ba',
        'fashion-for-women-75b8b0ba5',
        'bags-luggage-966bc8aac',
        'home-living-63562e055',
        'jewellery-0ac268845',
        'handmade-2a7770404',
        'pet-poultry-supplies-71f1bcb86',
        'glasses-80fed353d',
        'paints-e0476142d',
        'watch-clock-5f60b3d5d',
        'construction-materials-d113194a4',
        'sports-fitness-12d02b85a',
        'shoes-4-e89d62c12',
        'kitchen-dining-5e34f4934',
        'beauty-bodycare-172ec0d98',
        'mother-kids-toys-1ab77b4bf',
        'machineries-2f97319bf',
        'health-care-and-pharmaceutical-461de4f12',
        'vehicles-parts-2ab45393f',
        'decoration-materials-8410044cf',
        'harvesting-agriculture-acd16134b',
        'grocery-f93e6cdf1',
        'furniture-a0121d623',
        'books-stationery-ba8c6b105',
    ]
    ```

    ```js
    data: [
        {
            image_urls: ["https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/9fb594075862-28.png"]
            max_price: 60
            min_discounted_price: 45
            min_price: 60
            name: "3Gorges 1.5V AA Battery  - 4 Pcs"
            price_type: "fixed"
            slug: "3gorges-15v-aa-battery-4-pcs-b8f69e0af"
        }
    ]
    message: "Successful"
    next: "/api/v1/public/products?limit=12&page=2"
    previous: ""
    ```

- **`GET:`** `https://api.evaly.com.bd/esearch/api/v1/search/public/catalog_${catalog}/search-as-you-type?term=test%20abc&limit=5`

    ```js
    const catalog = [
        'products',
        'shops',
        'brands',
    ];
    ```

    ```js
    count: 81
    data: [
        {
            brand_name: "Individual Collections"
            brand_slug: "non-brand-24eb74301"
            category_name: "Health Monitors & Tests"
            category_slug: "health-monitors-testsball-81dee3b6b"
            color: ""
            color_variants: null
            discounted_price: 690
            docId: "61500587"
            es_relevance: 2876.9
            max_price: 900
            min_price: 900
            name: "Sinocare Safe AQ Smart Blood Glucose Test Strips - 50 Pcs"
            price: 900
            product_image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/dadfbb50054b-41.png"
            shop_item_id: 61500587
            shop_name: "Honestime Healthcare for Cash On Delivery Service "
            shop_slug: "honestime-healthcare-for-cash-on-delivery-service"
            slug: "sinocare-safe-aq-smart-blood-glucose-test-strips-50-pcs-aa562a0ee"
            tags: []
            version: 1628763776
        }
    ]
    message: "Successful"
    ```

    ```js
    count: 38794
    data: [
        {
            approval: 0
            contact_number: "01744331991"
            docId: "95412"
            id: 95412
            owner_name: "moner Munirujjaman"
            owner_number: "01744331991"
            shop_image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/95d1f6543205-Ecommerce_Banner.png"
            shop_name: "test"
            slug: "test-19"
            version: 1620076211
        },
    ]
    message: "Successful"
    ```

    ```js
    count: 8610
    data: [
        {
            docId: "26256"
            id: 26256
            image_url: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/13e55ce9ab27-o.png"
            name: "test"
            slug: "test-dd6f6a24a"
            version: 0
        },
    ]
    message: "Successful"
    ```

- **`GET:`** `https://api.evaly.com.bd/newsfeed/posts?page=1`

    ```js
    count: 43384
    message: "Posts fetched successfully."
    posts: [
        {
            attachment: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/7c6fff53a41f-image.jpg"
            attachment_compressed_url: "https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvN2M2ZmZmNTNhNDFmLWltYWdlLmpwZyIsICJlZGl0cyI6IHsianBlZyI6IHsicXVhbGl0eSI6IDcwfX19"
            author_compressed_image: "https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvNzJjZDFlNjczZTM1LWltYWdlLmpwZyIsICJlZGl0cyI6IHsianBlZyI6IHsicXVhbGl0eSI6IDcwfX19"
            author_full_name: "Mofijur Rahman"
            author_id: 954918
            author_image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/72cd1e673e35-image.jpg"
            author_is_admin: 0
            body: "আলহামদুলিল্লাহ টি টেন এর প্রোডাক্ট পাইলাম,কিন্তু এইটার জন্য ১০০ টাকা কোরিয়ার চার্জ বেশি হইয়ে গেলো,"
            comments_count: 61
            created_at: "2021-08-14T08:33:11.002269+00:00"
            favorited: 0
            favorites_count: 7
            id: 265740
            slug: "1628929991002"
            status: "active"
            type: "public"
            username: 954288
        }
    ]
    success: true
    ```

- **`GET:`** `https://api.evaly.com.bd/newsfeed/posts/1628878802757`

    ```js
    attachment: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/d5b12d9d7011-image.jpg"
    attachment_compressed_url: "https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvZDViMTJkOWQ3MDExLWltYWdlLmpwZyIsICJlZGl0cyI6IHsianBlZyI6IHsicXVhbGl0eSI6IDcwfX19"
    author: {
        bio: ""
        compressed_image: "https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvMjBmOGNjY2UyN2RlLWltYWdlLmpwZyIsICJlZGl0cyI6IHsianBlZyI6IHsicXVhbGl0eSI6IDc1fX19"
        following: false
        full_name: "Biplob Ansari"
        image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/20f8ccce27de-image.jpg"
        is_admin: false
        username: "4303932"
        body: "thanks to evaly for good support."
    }
    comments: [
        {
            attachement: null
            attachment_compressed_url: null
            author: {
                bio: ""
                compressed_image: "https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvZjBiNWMxNDdjNWIxLW5ld2ZpbGUuanBlZyIsICJlZGl0cyI6IHsianBlZyI6IHsicXVhbGl0eSI6IDc1fX19"
                following: false
                full_name: "Ala Uddin Ahmed"
                image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/f0b5c147c5b1-newfile.jpeg"
                is_admin: false
                username: "4034238"
            }
            body: "আমার নী‌চের অর্ডারগু‌লো ক‌বে পা‌বো ? \n*********************************\nOrder+Paid: 27-Mar-21\tEVL382039159\tWalton AC, Please Deliver Asap.\n*********************************\nOrder+Paid: 6-Mar-21\tEVL025270585\tHazi Cyclone-Najir Rice\nOrder+Paid: 10-Mar-21\tEVL035857250\tMeena Click Dhanmondi-Ispahani Tea\nOrder+Paid: 03-Apr-21\tEVL342787654\tJas Market Cyclone-Dal Bason\nOrder+Paid: 07-Apr-21\tEVL540671316\ttasty Tibet Mega Grocery-Bagda Chingri\nOrder+Paid: 10-Apr-21\tEVL046426466\tSuper Group Cyclone-Washing Powder\nOrder+Paid: 14-Apr-21\tEVL988565522\tTasty Mega Grocery Cyclone-Mutton\nOrder+Paid: 21-Apr-21\tEVL698757483\tKey Grocery Cyclone-Detergent 24pkt\nOrder+Paid: 21-Apr-21\tEVL177046385\tMega Grocery Cyclone-Igloo Sugar\nOrder+Paid: 24-Apr-21\tEVL844134402\tDanish Milk\nOrder+Paid: 25-Apr-21\tEVL508736286\tFU Eang Noodles\nOrder+Paid: 28-Apr-21\tEVL752767343\tDanish Mega grocery-Milk Ovaltin\nOrder+Paid: 05-May-21\tEVL793636345\tRed Chili Sauce\nOrder+Paid: 05-May-21\tEVL123494527\tMega Grocery Cyclone-Igloo Sugar\nOrder+Paid: 24-May-21\tEVL540395572\tAluPuri-Porata\nOrder+Paid: 05-Jun-21\tEVL128785903\tKhusboo kalijira Rice\nOrder+Paid: 05-Jun-21\tEVL421131215\tColgate Toothpaste\nOrder+Paid: 08-Jun-21\tEVL485338172\tOlay CreamYardly Tresme Shampoo\nOrder+Paid: 09-Jun-21\tEVL005834776\tDetol Handwash\nOrder+Paid: 16-Jun-21\tEVL873159905\tMeena Click Natunbazar-Grocery\nOrder+Paid: 23-Jun-21\tEVL736314814\tAgora -Gulshan Grocery"
            created_at: "2021-08-14T15:40:44.614573+00:00"
            id: 464989
            replies: []
            updated_at: "2021-08-14T15:40:44.614617+00:00"
        }
    ]
    comments_count: 2
    created_at: "2021-08-13T18:20:02.757991+00:00"
    favorited: false
    favorited_by: [
        {
            bio: ""
            compressed_image: "https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvMGRhY2EwNDA3M2YzLWltYWdlLmpwZyIsICJlZGl0cyI6IHsianBlZyI6IHsicXVhbGl0eSI6IDc1fX19"
            following: false
            full_name: "SAYYAZ MEHRAB"
            image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/0daca04073f3-image.jpg"
            is_admin: false
            username: "715242"
        },
        {},
        {},
    ]
    favorites_count: 4
    id: 265459
    slug: "1628878802757"
    status: "active"
    tag_list: []
    type: "public"
    updated_at: "2021-08-14T08:24:08.400033+00:00"
    ```

- **`GET:`** `https://api.evaly.com.bd/newsfeed/posts/1628878802757/comments?page=1`

    ```js
    count: 2
    data: [
        {
            attachement: null
            attachment_compressed_url: null
            author: {
                bio: ""
                compressed_image: "https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvZjBiNWMxNDdjNWIxLW5ld2ZpbGUuanBlZyIsICJlZGl0cyI6IHsianBlZyI6IHsicXVhbGl0eSI6IDc1fX19"
                following: false
                full_name: "Ala Uddin Ahmed"
                image: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/f0b5c147c5b1-newfile.jpeg"
                is_admin: false
                username: "4034238"
            }
            body: "আমার নী‌চের অর্ডারগু‌লো ক‌বে পা‌বো ? \n*********************************\nOrder+Paid: 27-Mar-21\tEVL382039159\tWalton AC, Please Deliver Asap.\n*********************************\nOrder+Paid: 6-Mar-21\tEVL025270585\tHazi Cyclone-Najir Rice\nOrder+Paid: 10-Mar-21\tEVL035857250\tMeena Click Dhanmondi-Ispahani Tea\nOrder+Paid: 03-Apr-21\tEVL342787654\tJas Market Cyclone-Dal Bason\nOrder+Paid: 07-Apr-21\tEVL540671316\ttasty Tibet Mega Grocery-Bagda Chingri\nOrder+Paid: 10-Apr-21\tEVL046426466\tSuper Group Cyclone-Washing Powder\nOrder+Paid: 14-Apr-21\tEVL988565522\tTasty Mega Grocery Cyclone-Mutton\nOrder+Paid: 21-Apr-21\tEVL698757483\tKey Grocery Cyclone-Detergent 24pkt\nOrder+Paid: 21-Apr-21\tEVL177046385\tMega Grocery Cyclone-Igloo Sugar\nOrder+Paid: 24-Apr-21\tEVL844134402\tDanish Milk\nOrder+Paid: 25-Apr-21\tEVL508736286\tFU Eang Noodles\nOrder+Paid: 28-Apr-21\tEVL752767343\tDanish Mega grocery-Milk Ovaltin\nOrder+Paid: 05-May-21\tEVL793636345\tRed Chili Sauce\nOrder+Paid: 05-May-21\tEVL123494527\tMega Grocery Cyclone-Igloo Sugar\nOrder+Paid: 24-May-21\tEVL540395572\tAluPuri-Porata\nOrder+Paid: 05-Jun-21\tEVL128785903\tKhusboo kalijira Rice\nOrder+Paid: 05-Jun-21\tEVL421131215\tColgate Toothpaste\nOrder+Paid: 08-Jun-21\tEVL485338172\tOlay CreamYardly Tresme Shampoo\nOrder+Paid: 09-Jun-21\tEVL005834776\tDetol Handwash\nOrder+Paid: 16-Jun-21\tEVL873159905\tMeena Click Natunbazar-Grocery\nOrder+Paid: 23-Jun-21\tEVL736314814\tAgora -Gulshan Grocery"
            created_at: "2021-08-14T15:40:44.614573+00:00"
            id: 464989
            replies: []
            updated_at: "2021-08-14T15:40:44.614617+00:00"
        }
    ]
    ```

- **`GET:`** `https://api.evaly.com.bd/eauth/api/v1/auth/profile`

    ```js
    data: {
        address: ""
        addresses: null
        birth_date: ""
        bkash_settlement_account: ""
        block_history: null
        contact: "01700000000"
        created_at: "2021-01-28T04:23:02.6Z"
        created_by: ""
        date_joined: "2021-01-28T04:23:02.6Z"
        devices: []
        email: ""
        facebook: ""
        first_name: "MD ARIF"
        gender: ""
        google: ""
        groups: []
        image_sm: ""
        is_active: true
        is_from_cache: true
        is_staff: false
        is_superuser: false
        last_login: "2021-08-14T10:44:44.809312Z"
        last_name: "HOSSAIN"
        new_registration: false
        occupation: ""
        organization: ""
        other_email: ""
        parents_info: null
        password: ""
        primary_email: ""
        profile_pic_url: ""
        role: ""
        updated_at: "2021-01-28T04:23:02.6Z"
        updated_by: ""
        user_status: "active"
        user_type: "customer"
        username: "01700000000"
        verified: true
    }
    message: "success"
    success: true
    ```

- **`GET:`** `https://api.evaly.com.bd/core/image/upload`

    ```js
    data: {
        url: "https://s3-ap-southeast-1.amazonaws.com/media.evaly.com.bd/media/images/c6261333700d-newfile.jpeg",
        url_sm: "https://df17fp68uwcso.cloudfront.net/eyJidWNrZXQiOiAibWVkaWEuZXZhbHkuY29tLmJkIiwgImtleSI6ICJtZWRpYS9pbWFnZXMvYzYyNjEzMzM3MDBkLW5ld2ZpbGUuanBlZyIsICJlZGl0cyI6IHsicmVzaXplIjogeyJ3aWR0aCI6IDE1MCwgImhlaWdodCI6IDE1MCwgImZpdCI6ICJjb250YWluIn0sICJiYWNrZ3JvdW5kIjogeyJyIjogMjU1LCAiZyI6IDI1NSwgImIiOiAyNTUsICJhbHBoYSI6IDF9LCAiZmxhdHRlbiI6IHRydWUsICJqcGVnIjogeyJxdWFsaXR5IjogNzV9fX0="
    }
    message: "Image upload successful"
    success: true
    ```

- **`GET:`** `https://epay.evaly.com.bd/epay-wallet/api/v1/public/user/transaction/wallet-history/01700000000?page=1`

    ```js
    data: []
    error: ""
    message: "Wallet history fetched successfully"
    meta: {
        count: 0
    }
    next: "/api/v1/public/user/transaction/wallet-history/01700000000?limit=10&page=2"
    previous: ""
    success: true
    ```

- **`GET:`** `https://api.evaly.com.bd/eauth/api/v1/address/get-addresses`

    ```js
    data: {
        addresses: [
            {
                address: "BORO DEWRA, TONGI"
                area: "Gazipur"
                area_slug: "gazipur-ybxnx"
                city: "Tongi"
                city_slug: "tongi-m4eet"
                full_name: "MD ARIF HOSSAIN"
                id: "6117c31702b93cf094750215"
                is_primary: true
                latitude: 0
                longitude: 0
                phone_number: "01700000000"
                region: "Dhaka"
                region_slug: "dhaka-uruvl"
                status: "active"
            }
        ]
        data: null
        username: "01700000000"
    }
    message: "Fetched addresses successfully"
    success: true
    ```

- **`GET:`** `https://api.evaly.com.bd/go-catalog/api/v1/public/locations`

    ```js
    data: [
        {id: 1, name: "Barisal", name_bn: "বরিশাল", slug: "barisal-zm5vz", parent: "", type: "region"}
        {id: 2, name: "Chittagong", name_bn: "চট্টগ্রাম", slug: "chittagong-793eb", parent: "", type: "region"}
        {id: 3, name: "Dhaka", name_bn: "ঢাকা", slug: "dhaka-uruvl", parent: "", type: "region"}
        {id: 4, name: "Khulna", name_bn: "খুলনা", slug: "khulna-dwslc", parent: "", type: "region"}
        {id: 5, name: "Rajshahi", name_bn: "রাজশাহী", slug: "rajshahi-h711e", parent: "", type: "region"}
        {id: 6, name: "Rangpur", name_bn: "রংপুর", slug: "rangpur-7ogcm", parent: "", type: "region"}
        {id: 7, name: "Sylhet", name_bn: "সিলেট", slug: "sylhet-psuxx", parent: "", type: "region"}
        {id: 8, name: "Mymensingh", name_bn: "ময়মনসিংহ", slug: "mymensingh-r8jxc", parent: "", type: "region"}
    ]
    message: "Successful"
    next: "/api/v1/public/locations?limit=100&page=2"
    previous: ""
    ```

- **`GET:`** `https://api.evaly.com.bd/go-catalog/api/v1/public/locations?parent=dhaka-uruvl`

    ```js
    data: [
        {
            id: 1
            name: "Dhaka"
            name_bn: "ঢাকা"
            parent: "dhaka-uruvl"
            slug: "dhaka-zgnkn"
            type: "city"
        }
    ]
    message: "Successful"
    next: "/api/v1/public/locations?limit=100&page=2"
    previous: ""
    ```

- **`GET:`** `https://api.evaly.com.bd/go-catalog/api/v1/public/locations?parent=gazipur-ybxnx`

    ```js
    data: [
        {
            id: 164
            name: "Tongi"
            name_bn: "টঙ্গি"
            parent: "gazipur-ybxnx"
            slug: "tongi-m4eet"
            type: "area"
        },
    ]
    message: "Successful"
    next: "/api/v1/public/locations?limit=100&page=2"
    previous: ""
    ```

- **`GET:`** `https://api.evaly.com.bd/eauth/api/v1/address/add-new-address`

    ```js
    data: {
        addresses: [
            {
                address: "BORO DEWRA, TONGI"
                area: "Gazipur"
                area_slug: "gazipur-ybxnx"
                city: "Tongi"
                city_slug: "tongi-m4eet"
                full_name: "MD ARIF HOSSAIN"
                id: "6117c31702b93cf094750215"
                is_primary: true
                latitude: 0
                longitude: 0
                phone_number: "01700000000"
                region: "Dhaka"
                region_slug: "dhaka-uruvl"
                status: "active"
            }
        ]
        data: null
        username: "01700000000"
    }
    message: "Address has been created"
    success: true
    ```

- **`GET:`** ``

    ```js
    ```

- **`GET:`** ``

    ```js
    ```

- **`GET:`** ``

    ```js
    ```

- **`GET:`** ``

    ```js
    ```

- **`GET:`** ``

    ```js
    ```
