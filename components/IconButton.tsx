import { Pressable, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string,
  onPress: () => void;
};
export default function IconButton({ icon, onPress, label }: Props) {
  return (
    <Pressable className={'items-center justify-center'} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color={'#fff'} />
      <Text className={'text-[#fff] mt-[12px]'}>{label}</Text>
    </Pressable>
  );
}
