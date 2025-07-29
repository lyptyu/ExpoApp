import { Link } from "expo-router";
import {View,Text} from "react-native";

export default function Index(){
    return (
        <View className={'flex-1 bg-[#25292e] justify-center items-center'}>
            <Text className={'text-#fff'}></Text>
            <Link href='/about' className="text-20 text-[#fff] text-underline">关于</Link>
        </View>
    )
}
