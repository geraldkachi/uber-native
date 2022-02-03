import React from 'react';
import ZocialIcon from '@expo/vector-icons/Zocial';
import OcticonIcon from '@expo/vector-icons/Octicons';
import MaterialIcon from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcon from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicon from '@expo/vector-icons/Ionicons';
import FoundationIcon from '@expo/vector-icons/Foundation';
import EvilIcon from '@expo/vector-icons/EvilIcons';
import EntypoIcon from '@expo/vector-icons/Entypo';
import FAIcon from '@expo/vector-icons/FontAwesome';
import FAIcon5 from '@expo/vector-icons/FontAwesome5';
import SimpleLineIcon from '@expo/vector-icons/SimpleLineIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Fontisto from '@expo/vector-icons/Fontisto';
import FontAwesome from "@expo/vector-icons/FontAwesome"
import IconProps from '@expo/vector-icons/build/createIconSet';

const getIconFont = (type: string) => {
  switch (type) {
    case 'fontisto':
      return Fontisto;
    case 'material':
      return MaterialIcon;
    case 'evil':
      return EvilIcon;
    case 'feather':
      return Feather;
    case 'ant':
      return AntDesign;
    case 'simpleLine':
      return SimpleLineIcon;
    case 'zocial':
      return ZocialIcon;
    case 'simpleLine':
      return SimpleLineIcon;
    case 'foundation':
      return FoundationIcon;
    case 'fa5':
      return FAIcon5;
    case 'fa':
      return FAIcon;
    case 'ionicon':
      return Ionicon;
    case 'materialCommunity':
      return MaterialCommunityIcon;
    case 'entypo':
      return EntypoIcon;
    case 'octicon':
      return OcticonIcon;
    case "fontawesome":
      return FontAwesome;
    default:
      return FAIcon;
  }
};
interface IconPropsTypes {
    IconProps
}

 const Icon = ({type, ...props}: any) => {
  const FontICon = getIconFont(type);

  return <FontICon {...props} />;
};

export default Icon;