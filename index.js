const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, fn) {
      const keys = Object.keys(collection)
      for(let i = 0; i < keys.length; i++) {
        fn(collection[keys[i]], keys[i], collection)
      }
      return collection
    },

    map: function(collection, fn) {
      const keys = Object.keys(collection)
      const newCollection = []
      for(let i = 0; i < keys.length; i++) {
        newCollection.push(fn(collection[keys[i]], keys[i], collection))
      }
      return newCollection
    },

    reduce: function(collection, fn, acc = 0) {
      const keys = Object.keys(collection)
      let memo = acc
      for(let i = 0; i < keys.length; i++) {
        memo = fn(memo, collection[keys[i]], collection)
      }
      return memo
    },

    find: function(collection, fn) {
      const keys = Object.keys(collection)
      for(let i = 0; i < keys.length; i++) {
        if(fn(collection[keys[i]]) === true) {
          return collection[keys[i]]
        }
      }
      return undefined
    },

    filter: function(collection, fn) {
      const keys = Object.keys(collection)
      const newArray = []
      for(let i = 0; i < keys.length; i++) {
        if(fn(collection[keys[i]]) === true) {
          newArray.push(collection[keys[i]])
        }
      }
      return newArray
    },

    size: function(collection) {
      const keys = Object.keys(collection)
      let counter = 0
      for(let i = 0; i < keys.length; i++) {
        counter++
      }
      return counter
    },

    first: function(collection, n) {
      if(n) {
        return collection.slice(0, n)
      } else {
        return collection[0]
      }
    },

    last: function(collection, n) {
      if(n) {
        const size = this.size(collection)
        return collection.slice(size - n, size)
      } else {
        return collection[this.size(collection) - 1]
      }
    },

    compact: function(collection) {
      const newCollection = []
      for(let i = 0; i < collection.length; i++) {
        if(!!collection[i] === true) {
          newCollection.push(collection[i])
        }
      }
      return newCollection
    },

    sortBy: function(collection, fn) {
      const sortedArr = collection.map(e => fn(e))
      sortedArr.sort(function(a, b){return a - b})
      return sortedArr.map(f => {
        return collection.find(e => fn(e) === f)
      })
    },

    flatten: function(array, shallow) {
      let arrayCopy = [...array]
      const flattenedArray = []
      while(arrayCopy.length > 0) {
        let item = arrayCopy.shift()
        if(typeof(item) === "object") {
          if(shallow) {
            for(const e of item) {
              flattenedArray.push(e)
            }
          } else {
            arrayCopy = [...item, ...arrayCopy]
          }
        } else {
          flattenedArray.push(item)
        }
      }
      return flattenedArray
    },

    uniq: function(array, isSorted = false, callBack = n => n) {
      const newArray = []
      for(const e of array) {
        const found = newArray.find(x => callBack(x) === callBack(e))
        if (!found) {
          newArray.push(e)
        }
      }
      return newArray
    },

    keys: function(obj) {
      const keyArray = []
      for(const key in obj) {
        keyArray.push(key)
      }
      return keyArray
    },

    values: function(obj) {
      const valueArray = []
      for(const key in obj) {
        valueArray.push(obj[key])
      }
      return valueArray
    },

    functions: function(obj) {
      const functionArray = []
      for(const key in obj) {
        if(typeof(obj[key]) === "function")
          functionArray.push(key)
      }
      return functionArray
    }


  }
})()

fi.libraryMethod()