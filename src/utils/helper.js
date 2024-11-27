export const convertDate = (rawDate) => {  
  const date =  new Date(rawDate)  

  return date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
};
