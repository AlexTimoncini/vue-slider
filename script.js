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
            autoPlay: setInterval(this.nextSlide, 3000),
            clepsydra: false,
            stopped: false
        }
    },
    methods: {
        prevSlide(){
            this.activeIndex === 0 ? this.activeIndex = this.slides.length - 1 : this.activeIndex--
            if (!this.stopped){
                this.clearAutoPlay();
                this.clepsydra = !this.clepsydra
            }
        },
        nextSlide(){
            this.activeIndex === this.slides.length - 1 ? this.activeIndex = 0 : this.activeIndex++
            if (!this.stopped){
                this.clearAutoPlay();
                this.clepsydra = !this.clepsydra
            }
        },
        thumbSlide(thumbIndex){
            this.activeIndex = thumbIndex
            if (!this.stopped){
                this.clearAutoPlay();
                this.clepsydra = !this.clepsydra
            }
        },
        clearAutoPlay(){
            if (!this.stopped){
                clearInterval(this.autoPlay);
                this.autoPlay = setInterval(this.nextSlide, 3000);
            }
        },
        pauseAutoPlay(){
            clearInterval(this.autoPlay);
        },
        pauseAutoPlayToggle(){
            if (!this.stopped){
                this.pauseAutoPlay();
                this.stopped = true;
            } else {
                this.clearAutoPlay();
                this.stopped = false;
            }
        }
    }
}).mount('#app')