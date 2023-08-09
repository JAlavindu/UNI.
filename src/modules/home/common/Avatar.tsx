import { FC } from "react";
import me from "../../../assets/me.jpg";
import { Link } from "react-router-dom";
export const Avatar: FC<{ size?: number; isLink?: boolean }> = ({
  size = 60,
  isLink,
}) => {
  const content = (
    <div
      style={{
        width: size,
        height: size,
      }}
      className="rounded-full overflow-hidden w-[60px] h-[60px]"
    >
      <img
        src={me}
        alt="Avatar of ..."
        className="object-cover object-center w-full h-full rounded-full"
      />
    </div>
  );

  if (isLink) {
    return <Link to={"/profile"}>{content}</Link>;
  }
  return content;
};
