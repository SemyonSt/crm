export const formatDate = (inputDate) =>{
  const date = new Date(inputDate);

  const formattedTime = `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const formattedDate = date.toLocaleDateString('ru-RU', options);

  const result = `${formattedTime} ${formattedDate}`;

  return result;
}
