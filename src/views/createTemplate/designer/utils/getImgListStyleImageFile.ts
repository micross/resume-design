// 获取列表静态资源
export const getImgListStyleImageFile = (url: string) => {
  const isOnlineUrl = url.includes('https://');
  if (isOnlineUrl) {
    return url;
  } else {
    return new URL(`../screenShot/${url}`, import.meta.url).href;
  }
};