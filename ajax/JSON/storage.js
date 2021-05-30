const storage = window.localStorage;

// 设置
const set = (key, value) => {
  // {
  //   username: 'alex'
  // }
  storage.setItem(key, JSON.stringify(value));
};

// 获取
const get = key => {
  // 'alex'
  // {
  //   "username": "alex"
  // }
  return JSON.parse(storage.getItem(key));
};

// 删除
const remove = key => {
  storage.removeItem(key);
};

// 清空
const clear = () => {
  storage.clear();
};

export { set, get, remove, clear };
