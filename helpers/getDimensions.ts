export const getDimensions = (url: string) => {
  if (url && url.includes("/")) {
    const parts = url.split("/");
    const twoStrings = parts[parts.length - 1];
  
    const [firstHalf, secondHalf] = twoStrings.split("x");
  
    const firstHalfSplit = firstHalf.split("-");
    const width = Number(firstHalfSplit[1]);
  
    const secondHalfSplit = secondHalf.split(".");
    const height = Number(secondHalfSplit[0]);
  
    return [width, height];
  } else {
    return null
  }
}