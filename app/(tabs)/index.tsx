import { ImageSourcePropType, View } from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';
import * as ImagePicker from 'expo-image-picker';
import { useRef, useState } from 'react';
import IconButton from '@/components/IconButton';
import CircleButton from '@/components/CircleButton';
import EmojiList from '@/components/EmojiList';
import EmojiPicker from '@/components/EmojiPicker';
import EmojiSticker from '@/components/EmojiSticker';
import {GestureHandlerRootView} from "react-native-gesture-handler";
import * as MediaLibrary from 'expo-media-library';
import {captureRef} from "react-native-view-shot";
const PlaceholderImage = require('@/assets/images/background-image.png');
export default function Index() {
    const imageRef = useRef<View>(null)
    const [status, requestPermission] = MediaLibrary.usePermissions();
    const [selectedImage, setSelectedImage] = useState<string|undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [pickedEmoji, setPickedEmoji] = useState<ImageSourcePropType|undefined>(undefined);
    if (status === null) {
      requestPermission()
    }
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
    function onReset(){
      setShowAppOptions(false);
    }
    function onAddSticker(){
      setIsModalVisible(true);
    }
    function onModalClose(){
      setIsModalVisible(false);
    }
    async function onSaveImageAsync(){
      try{
        const localUri = await captureRef(imageRef,{
          height:440,
          quality:1
        })
        await MediaLibrary.saveToLibraryAsync(localUri);
        if (localUri) {
          alert('Saved!')
        }
      } catch (e) {
        console.log(e);
      }
    }
    return (
        <GestureHandlerRootView>
           <View className={'flex-1 bg-[#25292e] justify-center items-center'}>
             <View className="flex-1">
               <View ref={imageRef} collapsable={false}>
                 <ImageViewer imgSource={PlaceholderImage} selectedImage={selectedImage}/>
                 {pickedEmoji && <EmojiSticker imageSize={100} stickerSource={pickedEmoji}/>}
               </View>
             </View>
             {
               showAppOptions ? (
                 <View className={'absolute bottom-[80px]'}>
                   <View className={'items-center flex-row'}>
                     <IconButton icon={'refresh'} label={'Reset'} onPress={onReset} />
                     <CircleButton onPress={onAddSticker} />
                     <IconButton icon={'save-alt'} label={'Save'} onPress={onSaveImageAsync} />
                   </View>
                 </View>
               ) :(<View className={'basis-[1/3] items-center'}>
                 <Button label={'Choose a photo'} theme={'primary'} onPress={PickImageAsync}/>
                 <Button label={'Use this photo'} theme={'secondary'} onPress={()=>setShowAppOptions(true)}/>
               </View>)
             }
             <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
               <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
             </EmojiPicker>
           </View>
        </GestureHandlerRootView>
    )
}
