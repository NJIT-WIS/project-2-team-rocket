import { dataLayer } from '../lib/datalayer';

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