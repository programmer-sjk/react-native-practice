import { Image, ImageResizeMode } from "react-native";

export type DisplayImageProps = {
  style: {
    width?: number;
    height?: number;
    resizeMode?: ImageResizeMode;
    marginTop?: number;
  };
};

export function DisplayImage({ style }: DisplayImageProps) {
  return <Image source={require("@/assets/images/to-do.png")} style={style} />;
}
