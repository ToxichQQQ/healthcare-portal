import { FC } from "react";
import { IStaticticItem } from "../../types";

interface ILineProgress {
  data: IStaticticItem[];
  totalCount: number;
}

export const LineProgress: FC<ILineProgress> = ({ data, totalCount }) => {
  return (
    <div
      style={{
        display: "flex",
        width: 390,
        height: 12,
        borderRadius: "0px 4px 4px 0px",
      }}
    >
      {data.map((item) => (
        <div
          key={item.name}
          style={{
            width: `${(100 * item.value) / totalCount}%`,
            background: `${item.color}`,
            height: "100%",
            borderTopLeftRadius: 2,
            borderBottomLeftRadius: 2,
          }}
        ></div>
      ))}
    </div>
  );
};
