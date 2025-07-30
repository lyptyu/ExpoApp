import { Image } from 'expo-image';
import { ImageSourcePropType } from 'react-native';
type Props = {
  imgSource: ImageSourcePropType;
};
export default function ImageViewer({ imgSource }: Props) {
    return <Image source={imgSource} className="w-[320px] h-[440px] rounded-[18px]" />
}
