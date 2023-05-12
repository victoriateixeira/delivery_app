export default function formatDate(dateString) {
  const [year, month, day] = dateString.split('T')[0].split('-');
  return `${month}/${day}/${year}`;
}
