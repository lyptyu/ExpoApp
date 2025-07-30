import { Image } from 'expo-image';
import { ImageSourcePropType, View } from 'react-native';
type Props = {
  imgSource: ImageSourcePropType;
  selectedImage?: string;
};
export default function ImageViewer({ imgSource, selectedImage }: Props) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource
    // 使用 View 包装 Image，因为 View 对 NativeWind 支持最好
    return (
        <View className="w-[320px] h-[440px] rounded-[18px] overflow-hidden">
            <Image 
                source={imageSource} 
                style={{ width: '100%', height: '100%' }}
                contentFit="cover"
                transition={300}
            />
        </View>
    )
}
