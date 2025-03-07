interface Props {
  children: React.ReactNode;
}

const Stage = ({ children }: Props) => (
  <div className="bg-gray-100 p-4">{children}</div>
);

export { Stage };
