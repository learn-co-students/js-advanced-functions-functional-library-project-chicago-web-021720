const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(ob, fun) {
      for (const elm of Object.values(ob)) {
        fun(elm)
      }
      return ob
    },

    map: function(ob, fun) {
      const newOb = []
      for (const elm of Object.values(ob)) {
        newOb.push(fun(elm))
      }
      return newOb
    },

    reduce: function(ob, fun, init = 0) {
      const newOb = [...ob]
      init = (init ? init : newOb.shift())
      for (const elm of newOb) {
        init = fun(init, elm)
      }
      return init
    },

    find: function(ob, cond) {
      for (const elm of ob) {
        if (cond(elm)) {
          return elm
        }
      }
      return undefined
    },

    filter: function(ob, cond) {
      const newOb = []
      for (const elm of ob) {
        if (cond(elm)) {
          newOb.push(elm)
        }
      }
      return newOb
    },

    size: function(ob) {
      return fi.reduce(Object.values(ob), function(x){return x + 1})
    },

    first: function(ob, n = 1) {
      const arr = []
      for (let i = 0; i < n; i++) {
        arr.push(ob[i])
      }
      return (arr.length > 1 ? arr : arr[0])
    },

    last: function(ob, n = 1) {
      const len = ob.length
      const arr = []
      for (let i = len - n; i < len; i++) {
        arr.push(ob[i])
      }
      return (arr.length > 1 ? arr : arr[0])
    },

    compact: function(ob) {
      return fi.filter(ob, (x)=>!!x)
    },

    sortBy: function(ob, fun=(x)=>x) {
      if (ob.length <= 1) {
        return ob;
      }
      const middle = Math.floor(ob.length / 2);
    
      const left = ob.slice(0, middle);
      const right = ob.slice(middle);
    
      return fi.merge(fi.sortBy(left, fun), fi.sortBy(right, fun), fun);
    },

    merge: function(left, right, fun=(x)=>x) {
      let resultArray = [], leftIndex = 0, rightIndex = 0;

      while (leftIndex < left.length && rightIndex < right.length) {
        if (fun(left[leftIndex]) < fun(right[rightIndex])) {
          resultArray.push(left[leftIndex]);
          leftIndex++;
        } else {
          resultArray.push(right[rightIndex]);
          rightIndex++;
        }
      }

      return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    },

    uniq: function(ob, isSorted = false, fun = undefined) {
      const rez = []
      for (const elm of ob) {
        if (!fun) {
          if (!rez.includes(elm)) {
            rez.push(elm)
          }
        }
        else {
          if (!rez.find(ho => fun(ho) === fun(elm))) {
            rez.push(elm)
          }
        }
      }
      return (typeof rez[0] === "number" ? rez.sort((a,b)=>a-b) : rez.sort())
    },

    keys: function(ob) {
      return Object.keys(ob)
    },

    values: function(ob) {
      return Object.values(ob)
    },

    functions: function(ob) {
      return Object.getOwnPropertyNames(ob).filter(item => typeof ob[item] === 'function').sort()
    },

    flatten: function(ob, shallow=false) {
      const rez = [];
      function flattener(myOb) {
        for (let i = 0; i < myOb.length; i++) {
          const subOb = myOb[i];
          if (shallow) {
            if (typeof subOb === "object") {
              subOb.forEach(ho=>rez.push(ho))
            }
            else {
              rez.push(subOb)
            }
          }
          else {
            if (typeof subOb != "object") {
              rez.push(subOb);
            }
            else {
              flattener(subOb);
            }
          }
        }
      }
      flattener(ob);
      return rez;
    }

  }
})()

fi.libraryMethod()