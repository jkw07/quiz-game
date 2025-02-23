type QuizContainerProps = {
  title: string;
  onClick: () => void;
  image: string | null;
};

export const QuizContainer = ({
  title,
  onClick,
  image,
}: QuizContainerProps) => {
  return (
    <div className="quiz-container" onClick={onClick}>
      <img src={image ?? ""} />
      <p>{title}</p>
    </div>
  );
};
