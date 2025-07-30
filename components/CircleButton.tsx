import {Pressable, View} from "react-native";
import {MaterialIcons} from "@expo/vector-icons";
type Props = {
    onPress: () => void
}

export default  function CircleButton({onPress}:Props) {
    return (
        <View className={'w-[84px] h-[84px] mx-[60px] border-[4px] border-[#ffd33d] rounded-[42px] p-[3px]'}>
            <Pressable
                onPress={onPress}
                className={'flex-1 justify-center items-center rounded-[42px] bg-[#fff]'}
            >
                <MaterialIcons name={'add'} size={38} color={'#25292e'} />
            </Pressable>
        </View>
    )
}
