function titleMaxLength(title){
  if(title.length >= 90){
    return `${title.slice(0, 90)}...`
  }
  return title;
}
export default titleMaxLength;