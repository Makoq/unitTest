import React, { FC } from "react";
// import placeholderImage from "/";
import "./index.scss";

interface ImageButtonProps {
  onButtonClick: () => void;
  width: number;
  height: number;
  btnImageUrl: string;
  btnImagePosition: string;
  btnStyle?: React.CSSProperties;
}
//雪碧图按钮

const ImageButton: FC<ImageButtonProps> = (props) => {
  const {
    onButtonClick,
    btnImageUrl,
    btnStyle,
    btnImagePosition,
    width,
    height,
  } = props;

  return (
    <div
      className="image-of-button"
      style={{
        ...btnStyle,
        width,
        height,
        backgroundImage: `url(${btnImageUrl})`,
        backgroundPosition: btnImagePosition,
      }}
      onClick={() => typeof onButtonClick === "function" && onButtonClick()}
    />
  );
};

export default ImageButton;
