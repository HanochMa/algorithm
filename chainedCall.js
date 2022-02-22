/**
 * 链式调用a(b)(c)(d) 核心在于调用后返回自身实例
 *
 */

/**
 * 用原型链实现
 */
function chainCall(params) {}
chainCall.prototype.method = function (params) {
  console.log(params);
  return this;
};
//由于new 在实例化的时候this会指向创建的对象， 所以this.method这个方法会在原型链中找到。
const a = new chainCall();
a.method("maheng").method("offer").method("success");

/**
 * 用对象实现
 */
let chainCall2 = {
  foo: function (params) {
    console.log(params);
    return this;
  },
  bar: function (params) {
    console.log(params);
    return this;
  },
};
chainCall2.foo('maheng').bar('niubi')

/**
 * 用class实现
 */
class chainCall3{
  constructor(params){
    this.name = params
  }
  foo(params){
    console.log(params,'chainCall3')
    return this
  }
  bar(params){
    console.log(params,'chainCall3')
    return this
  }
}
const b = new chainCall3()
b.foo('maheng').bar('niubi111')