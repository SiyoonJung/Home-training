const Video = ({ type, text, onClick }) => {
    return (
      <button className={'MyButton'} onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default Video;
  