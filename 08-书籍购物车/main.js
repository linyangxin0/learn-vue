const app=new Vue({
  el:'#app',
  data:{
    books:[{
      id:1,
      name:'《算法导论》',
      data: '2006-9',
      price:85.00,
      count:1
    },{
      id:2,
      name:'《UNXI编程艺术》',
      data: '2006-2',
      price:59.00,
      count:1
    },{
      id:3,
      name:'《编程珠玑》',
      data: '2008-10',
      price:39.00,
      count:1
    },{
      id:4,
      name:'《操作系统》',
      data: '2008-9',
      price:65.00,
      count:1
    }]
  },
  methods: {
    removeHandle(index){
      this.books.splice(index,1);
    }
  },
  computed:{
    totalPrice(){
      // let result=0;
      // for(let i=0;i<this.books.length;i++)
      //   result+=this.books[i].price*this.books[i].count;
      // return result;
      return this.books.reduce(function (preValue,book) {
        return preValue+book.price*book.count;
      },0)
    }
  },
  filters:{
    showPrice(price){
      return '￥'+price.toFixed(2);
    }
  }
})

//filter过滤函数、map遍历操作函数、reduce函数对数组中所有内容进行汇总
