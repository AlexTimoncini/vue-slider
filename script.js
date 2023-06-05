const { createApp } = Vue

createApp({
    data() {
        return {
            slides: [
                {
                    order: 0,
                    image: 'assets/infinite.png',
                    name: 'Infinite',
                    year: 1996
                },
                {
                    order: 1,
                    image: 'assets/ssep.jpg',
                    name: 'The Slim Shady EP',
                    year: 1997
                },
                {
                    order: 2,
                    image: 'assets/sslp.jpg',
                    name: 'The Slim Shady LP',
                    year: 1999
                },
                {
                    order: 3,
                    image: 'assets/mmlp.webp',
                    name: 'The Marshall Mathers LP',
                    year: 2000
                },
                {
                    order: 4,
                    image: 'assets/tes.jpg',
                    name: 'The Eminem Show',
                    year: 2002
                },
                {
                    order: 5,
                    image: 'assets/encore.jpg',
                    name: 'Encore',
                    year: 2004
                },
                {
                    order: 6,
                    image: 'assets/relapse.jpg',
                    name: 'Relapse',
                    year: 2009
                },
                {
                    order: 7,
                    image: 'assets/recovery.jpg',
                    name: 'Recovery',
                    year: 2010
                },
                {
                    order: 8,
                    image: 'assets/mmlp2.png',
                    name: 'The Marshall Mathers LP 2',
                    year: 2013
                },
                {
                    order: 9,
                    image: 'assets/revival.jpg',
                    name: 'Revival',
                    year: 2017
                },
                {
                    order: 10,
                    image: 'assets/kamikaze.jpg',
                    name: 'Kamikaze',
                    year: 2018
                },
                {
                    order: 11,
                    image: 'assets/mtbmbA.png',
                    name: 'Music To Be Murdered By',
                    year: 2020
                },
                {
                    order: 12,
                    image: 'assets/mtbmbB.jpg',
                    name: 'Music To Be Murdered By - Side B',
                    year: 2020
                }
            ],
            activeIndex: 11,
        }
    }
}).mount('#app')