import { ReactNode } from "react";
interface props {
  children?: ReactNode;
  item: String;
}
const Task = ({ children, item }: props) => {
  return (
    <div className="relative flex items-center mt-8 h-fit">
      <span className="text-white font-semibold">{item}</span>
      {children}
    </div>
  );
};

export default Task;
