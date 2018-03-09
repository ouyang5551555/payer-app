/*
* 随机数
*/

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/*
*  get请求表单序列化
*/
export function param(data) {
  let url = ''
  for (var k in data) {
    let value = data[k] !== undefined ? data[k] : ''
    url += '&' + k + '=' + encodeURIComponent(value)
  }
  return url ? url.substring(1) : ''
}

/*
*  洗牌
*/
export function shuffleArr(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}

/*
*  延迟函数
*/
export function debounce(func, delay) {
  let timer

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

/*
*  千位分隔符
*/

export function formatText(str,size = 3,delimiter = ','){
  var _str = str.toString();
  /*
   如果_size是3
   "\d{1,3}(?=(\d{3})+$)"
   */
  var regText='\\d{1,'+size+'}(?=(\\d{'+size+'})+$)';
  /*
  /\d{1,3}(?=(\d{3})+$)/g     这个正则的意思：匹配连续的三个数字，但是这些三个数字不能是字符串的开头1-3个字符
   */
  var reg=new RegExp(regText,'g');
  /*
  (-?) 匹配前面的-号   (\d+)匹配中间的数字   ((\.\d+)?)匹配小数点后面的数字
  //$0-匹配结果，$1-第一个括号返回的内容----(-?)    $2,$3如此类推
  */
  return _str.replace(/^(-?)(\d+)((\.\d+)?)$/, function ($0, $1, $2, $3) {
    return $1 + $2.replace(reg, '$&'+delimiter) + $3;//.substr(0,3);
  })
}

/*
*  表单验证
*/

export function formValidator(form, rules, fun) {
  function vali(val, msg, reg, required = true) {
    if(required) { //必须
      if(!val || !reg.test(val)) {
        fun(msg)
        return false
      } else {
        return true
      }
    } else { //非必须
      if(!val) {
        return true
      } else if (!reg.test(val)) {
        fun(msg)
        return false
      } else {
        return true
      }
    }
  }
  let rtn = true
  for(let key in form) {
    rtn = rtn && vali(form[key], rules[key].message, rules[key].reg, rules[key].required)
    if(!rtn) {return false}
  }
  return true
}

/*
* 过滤非数字字符
*  fixed保留小数位
*/

export function filterNumber(value, fixed = 2) {
  return value.replace(/\.?|^0/g, '')
}

/*
* 创建字谜(带有重复项)
* anagrams('abc') -> ['abc','acb','bac','bca','cab','cba']
*/
export const anagrams =  str => {
  if(str.length <= 2) {
    return str.length === 2? [str, str[1] + str[0]] : [str]
  }
  return str.split('').reduce((acc, letter, i) =>
    acc.concat(anagrams(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)), [])
}

/*
*  斐波那契数组生成器
*  后面的一个数等于前面两个数相加之和
*/
export const fibonacci = n =>
  Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);

/*
* 最大公约数
*/
export const gcd = (x, y) => !y ? x : gcd(y, x % y);

/*
* 组合成包含所有组合的数组
*/
export const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]])




/*
*  测试功能所花费的时间
*  timeTaken(() => Math.pow(2, 10)) -> 1024
*  (logged): timeTaken: 0.02099609375ms
*/
const timeTaken = callback => {
  console.time('timeTaken');
  const r = callback();
  console.timeEnd('timeTaken');
  return r;
};

/*
*  随机化数组的顺序
*/
export const shuffle = arr => arr.sort(() => Math.random() - 0.5);


/*
*  RGB到十六进制
*/

export const rgbToHex = (r, g, b) => ((r << 16) + (g << 8) + b).toString(16).padStart(6, '0');


/*
* URL参数 转对象
*/
export const getUrlParameters = url =>
  url.match(/([^?=&]+)(=([^&]*))/g).reduce(
    (a, v) => (a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1), a), {}
  )

/*
* UUID生成器
* 使用crypto API生成符合RFC4122版本4的UUID。
* // uuid() -> '7982fcfe-5721-4632-bede-6000885be57d'
*/

export const uuid = () =>
  ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )


/*
*  两点之间的距离
*/
export const distance = (x0, y0, x1, y1) => Math.hypot(x1 - x0, y1 - y0);

/*
*  数组之间的区别
*   difference([1,2,3], [1,2]) -> [3]
*/
export const difference = (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); };

/*
*  //deepFlatten([1,[2],[[3],4],5]) -> [1,2,3,4,5]
*/

export const deepFlatten = arr => arr.reduce((a, v) => a.concat(Array.isArray(v) ? deepFlatten(v) : v), []);
