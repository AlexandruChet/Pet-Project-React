interface Title {
  text: string,
  className: string,
}

const Heading = ({ text, className, ...props }: Title) => {
  return (
    <h1 className={className} {...props}>
      {text}
    </h1>
  );
};

export default Heading;
