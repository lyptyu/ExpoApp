import {Modal, View, Text, Pressable} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
type Props = {
    isVisible: boolean;
    onClose: ()=>void
}
export default function EmojiPicker({isVisible,onClose}: Props) {
    return (
        <View>
            <Modal animationType={'slide'} transparent={true} visible={isVisible}>
                <View className={'h-[25%] w-full bg-[#25292e] rounded-tr-[18px] rounded-tl-[18px] absolute bottom-0'}>
                    <View className={'h-[16%] bg-[#464C55] rounded-tr-[10px] rounded-tl-[10px] px-[20px] flex-row items-center justify-between'}>
                        <Text className={'text-[#fff] text-[16px]'}>Choose a sticker</Text>
                        <Pressable onPress={onClose}>
                            <MaterialIcons name={'close'} size={22} color={'#fff'} />
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
