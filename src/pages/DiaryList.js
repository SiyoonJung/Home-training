const DiaryList = ({ type, text, onClick }) => {
    return (
      <button className={'MyButton'} onClick={onClick}>
        {text}
      </button>
    );
  };
  
  export default DiaryList;
  