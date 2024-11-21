const KeyValue = ({
  title,
  value,
}: {
  title: string;
  value: string | number;
}) => {
  return (
    <div className="flex flex-col border border-foreground/5 rounded-md p-2">
      <h1 className="text-sm font-bold">{title}</h1>
      <p className="text-sm text-foreground/70">{value}</p>
    </div>
  );
};
 
export default KeyValue;