import React from "react";
import { TouchableOpacity } from "react-native"; // Corrected import
import PropTypes from "prop-types";
import { FontAwesome } from "@expo/vector-icons";

const Button = ({ iconName, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <FontAwesome name={iconName} size={80} color="#ffffff" />
  </TouchableOpacity>
);

Button.propTypes = {
  iconName: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Button;