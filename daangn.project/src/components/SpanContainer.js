export const SpanContainer = ({ content }) => {
  const Spans = content.map((c) => {
    return <span>{c}</span>;
  });
  return <div>{Spans}</div>;
};
