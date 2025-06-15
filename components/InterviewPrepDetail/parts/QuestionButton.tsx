export const QuestionButton = ({
  canSetQuestion,
  setQuestion,
  text,
}: {
  canSetQuestion: () => boolean;
  setQuestion: () => void;
  text: string;
}) => (
  <button
    className='px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-600 hover:cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-600'
    onClick={setQuestion}
    disabled={!canSetQuestion()}
  >
    {text}
  </button>
);
