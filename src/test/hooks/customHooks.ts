import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    isSearchScene &&
      duration > 0 &&
      handleClickTeaLogReport?.(LOG_KEY.SEARCH_SCENE_PLAY_TIME, { duration });
  }, [duration]);
  useEffect(() => {
    setCount(count + 1);
    console.log("1", count);
    // 可以获取到最新的 count 的值
  }, [count]); // 依赖于 count 变量
  console.log("2", count);
  return count;
}
