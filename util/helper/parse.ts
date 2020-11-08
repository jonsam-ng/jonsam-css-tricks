export const parsePx = (val: number | string, defaultVal: string): string => {
  let realVal;
  if(typeof val === "number") {
    realVal = val + "px";
  } else if(typeof size === "string"){
    realVal = val;
  } else {
    realVal = defaultVal
  }
  return realVal;
}