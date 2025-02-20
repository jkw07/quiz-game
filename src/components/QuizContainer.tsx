type QuizContainerProps = {
  title: string;
  onClick: () => void;
};

export const QuizContainer = ({ title, onClick }: QuizContainerProps) => {
  return (
    <div className="quiz-container" onClick={onClick}>
      <button>
        <img></img>
      </button>
      <p>{title}</p>
    </div>
  );
};
