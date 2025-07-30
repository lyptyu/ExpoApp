import { View } from "react-native";
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import {useState} from "react";
const PlaceholderImage = require('@/assets/images/background-image.png');
export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string|undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState(false);
    const PickImageAsync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:['images'],
            allowsEditing: true,
            quality: 1
        })
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            alert('You did not select any image.')
        }
    }
    return (
        <View className={'flex-1 bg-[#25292e] justify-center items-center'}>
            <View className="flex-1">
                <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
            </View>
            {
                showAppOptions ? (<View />) :(<View className={'basis-[1/3] items-center'}>
                    <Button label={'Choose a photo'} theme={'primary'} onPress={PickImageAsync}/>
                    <Button label={'Use this photo'} theme={'secondary'} onPress={()=>setShowAppOptions(true)}/>
                </View>)
            }
        </View>
    )
}
