//import { dataLayer } from "../lib/datalayer"

export const dataLayer = (data) => {
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);
  }
}

function Button(props) {
  const handleClick = () => {
    dataLayer({
      event: 'buttonClick',
      buttonName: props.name,
      buttonText: props.text
    });
  }

  return (
    <button onClick={handleClick}>{props.text}</button>
  );
}

export default Button;