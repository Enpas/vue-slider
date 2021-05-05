const app = new Vue({

  el: '#app',

  data: {

    contatoreImg: 0,

    ricercaImg: [
      'img/Wallpaper-1.jpg',
      'img/Wallpaper-2.jpg',
      'img/Wallpaper-3.jpg',
      'img/Wallpaper-4.jpg'
    ]

  },
  methods: {
    
    prevImg() {
      this.contatoreImg--;
      if (this.contatoreImg < 0) {
        this.contatoreImg = (this.ricercaImg.length - 1);
      }
    },

    nextImg() {
      this.contatoreImg++;
      if (this.contatoreImg === this.ricercaImg.length) {
        this.contatoreImg = 0;
      }
    }

  }

}); 