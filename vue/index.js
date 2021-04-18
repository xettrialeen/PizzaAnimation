const pizza = new Vue({
  el: "#pizza",
  data: {
    message: "hello world",
    imageSwap: true,
    leftSwap: true,
    bl2: true,
    nextpage: true,

    pep: true,
  },
  methods: {
    // c nextpage opener

    nextPageFunc() {
      this.nextpage = false;
      console.log(this.nextpage);
    },

    // c firstpage
    swapFunc() {
      this.imageSwap = !this.imageSwap;
      this.leftSwap = true;
    },
    leftSwapFunc() {
      this.leftSwap = !this.leftSwap;
      this.imageSwap = true;
    },
    bl2Func() {
      this.bl2 = !this.bl2;
    },

    pepFunc() {
      this.pep = !this.pep;
      console.log(this.pep);
    },
  },
});
