import { Pressable, View, Text } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

type Props = {
    label: string;
    theme: 'primary' | 'secondary';
    onPress?: () => void
}
export default function Button({ label, theme, onPress }: Props) {
    if (theme === 'primary') {
        return (
            <View className="w-[320px] h-[68px] mx-[20px] items-center justify-center p-[3px] border-[4px] border-[#ffd33d] rounded-[18px]">
                <Pressable className="rounded-[10px] w-full h-full items-center justify-center flex-row bg-[#fff]"
                    onPress={onPress}
                >
                    <FontAwesome name="picture-o" size={18} color="#25292e" className="pr-[8px]" />
                    <Text className="text-[#25292e] text-[16px]">{label}</Text>
                </Pressable>
            </View>
        )
    }
    return(
        <View className={'w-[320px] h-[68px] mx-[20px] items-center justify-center p-[3px]'}>
            <Pressable className={'rounded-[10px] w-full h-full items-center justify-center flex-row'} onPress={onPress}>
                <Text className={'text-[#fff] text-[16px]'}>{label}</Text>
            </Pressable>
        </View>
    )
}
