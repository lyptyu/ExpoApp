import {useState} from "react";
import {FlatList, ImageSourcePropType, Platform, Pressable} from "react-native";
import {Image} from "expo-image";
type Props = {
    onSelect:(item:ImageSourcePropType)=>void;
    onCloseModal:()=>void
}
export default function EmojiList({onSelect,onCloseModal}:Props) {
    const [emoji] = useState<ImageSourcePropType[]>([
        require('@/assets/favicon.png'),
        require('@/assets/adaptive-icon.png'),
        require('@/assets/icon.png'),
        require('@/assets/splash.png'),
    ])
    return(
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web'}
            data={emoji}
            contentContainerClassName={'rounded-tr-[10px] rounded-tl-[10px] px-[20px] flex-row items-center justify-between'}
            renderItem={
                ({item,index})=>{
                    return(
                        <Pressable onPress={()=>{
                            onSelect(item)
                            onCloseModal()
                        }}>
                            <Image source={item} key={index} className={'w-[100px] h-[100px] mr-[20px]'}/>
                        </Pressable>
                    )
                }
            } />
    )
}
