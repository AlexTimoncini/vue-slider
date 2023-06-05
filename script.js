const { createApp } = Vue

createApp({
    data() {
        return {
            slides: [
                {                    
                    image: 'assets/infinite.png',
                    name: 'Infinite',
                    year: 1996
                },
                {                    
                    image: 'assets/ssep.jpg',
                    name: 'The Slim Shady EP',
                    year: 1997
                },
                {                    
                    image: 'assets/sslp.jpg',
                    name: 'The Slim Shady LP',
                    year: 1999
                },
                {                    
                    image: 'assets/mmlp.webp',
                    name: 'The Marshall Mathers LP',
                    year: 2000
                },
                {                    
                    image: 'assets/tes.jpg',
                    name: 'The Eminem Show',
                    year: 2002
                },
                {                    
                    image: 'assets/encore.jpg',
                    name: 'Encore',
                    year: 2004
                },
                {                    
                    image: 'assets/relapse.jpg',
                    name: 'Relapse',
                    year: 2009
                },
                {                    
                    image: 'assets/recovery.jpg',
                    name: 'Recovery',
                    year: 2010
                },
                {                    
                    image: 'assets/mmlp2.png',
                    name: 'The Marshall Mathers LP 2',
                    year: 2013
                },
                {                    
                    image: 'assets/revival.jpg',
                    name: 'Revival',
                    year: 2017
                },
                {
                    image: 'assets/kamikaze.jpg',
                    name: 'Kamikaze',
                    year: 2018
                },
                {
                    image: 'assets/mtbmbA.png',
                    name: 'Music To Be Murdered By',
                    year: 2020
                },
                {
                    image: 'assets/mtbmbB.jpg',
                    name: 'Music To Be Murdered By - Side B',
                    year: 2020
                }
            ],
            activeIndex: 11,
        }
    },
    methods: {
        prevSlide(){
            this.activeIndex === 0 ? this.activeIndex = this.slides.length - 1 : this.activeIndex--
        },
        nextSlide(){
            this.activeIndex === this.slides.length - 1 ? this.activeIndex = 0 : this.activeIndex++
        }
    }
}).mount('#app')