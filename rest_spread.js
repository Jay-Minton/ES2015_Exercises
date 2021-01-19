
  const filterOutOdds = (...nums) => nums.filter((vals) => vals % 2 == 0);


  const findMin = (...nums) => Math.min(...nums);

  const mergeObjects = (first, second) => ({...first, ...second});

  const doubleandReturnArgs = (first, ...then) => {
      return [...first, ...then.map(val => val * 2)];
  } 

  const removeRandom = items => {
     let i = Math.floor(Math.random() * items.length);
     return [...items.slice(0,i), ...items(i + 1)];   
  }

  const extend = (array1, array2) =>  {
      return [...array1, ...array2];
  }

  const addKeyVal = (obj, key, val) => {
      let newObj = {...obj};
      newObj[key] = val;
      return newObj;
  }

  const removeKey = (obj, key) => {
      let newObj = {...obj};
      delete obj[key];
      return newObj

  }

  const combine = (obj1, obj2) => {
      return {...obj1, ...obj2};
  }

  const update = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
  }