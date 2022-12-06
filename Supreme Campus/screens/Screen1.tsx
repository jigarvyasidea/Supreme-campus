import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";

const Screen1 = () => {
  return (
    <View style={styles.screen1}>
      <Image
        style={styles.index1Icon}
        resizeMode="cover"
        source={require("../assets/index-1.png")}
      />
      <View style={styles.bgView} />
      <View style={styles.gradientView} />
      <Text style={styles.welcomeToText}>{`Welcome to `}</Text>
      <View style={styles.btnView}>
        <Text style={styles.primryButtonText}>
          <Text style={styles.primryButtonTxtContainer}>
            <Text style={styles.learnMoreText}>{`>>  Learn More`}</Text>
          </Text>
        </Text>
      </View>
      <View style={styles.statusBarView}>
        <Text style={styles.text}>9:30</Text>
        <View style={[styles.statusBarIconView, styles.ml132]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.ml15]}
            resizeMode="cover"
            source={require("../assets/vector1.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.ml15]}
            resizeMode="cover"
            source={require("../assets/vector2.png")}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml15: {
    marginLeft: 15,
  },
  ml132: {
    marginLeft: 132,
  },
  index1Icon: {
    position: "absolute",
    top: 217,
    left: 0,
    width: 775,
    height: 406,
  },
  bgView: {
    position: "absolute",
    top: -103,
    left: -544,
    backgroundColor: "#d9d9d9",
    width: 475,
    height: 932,
  },
  gradientView: {
    position: "absolute",
    top: -46,
    left: 102,
    width: 430,
    height: 932,
  },
  welcomeToText: {
    position: "absolute",
    top: 171,
    left: -68,
    fontSize: 34,
    letterSpacing: -0.7,
    fontWeight: "700",
    fontFamily: "Work Sans",
    color: "#000",
    textAlign: "center",
    width: 566,
    height: 46,
  },
  learnMoreText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  primryButtonTxtContainer: {
    lineBreak: "anywhere",
    width: "100%",
  },
  primryButtonText: {
    position: "relative",
    fontSize: 20,
    fontFamily: "Inter",
    color: "#f9f9f9",
    whiteSpace: "pre-wrap",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    width: 196.52,
    height: 71.43,
    transform: [
      {
        rotate: "0.02deg",
      },
    ],
  },
  btnView: {
    position: "absolute",
    top: 695,
    left: 15,
    backgroundColor: "#5d5fef",
    width: 382,
    height: 91,
    flexDirection: "row",
    padding: 20,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    position: "relative",
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    width: 73,
    height: 34,
  },
  vectorIcon: {
    position: "relative",
    width: 25,
    height: 17.5,
    flexShrink: 0,
  },
  vectorIcon1: {
    position: "relative",
    width: 23.13,
    height: 32.95,
    flexShrink: 0,
  },
  vectorIcon2: {
    position: "relative",
    width: 25,
    height: 12.5,
    flexShrink: 0,
  },
  statusBarIconView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  statusBarView: {
    position: "absolute",
    top: 0,
    left: -40,
    backgroundColor: "#5d5fef",
    width: 492,
    height: 47,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  screen1: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 932,
    overflow: "hidden",
  },
});

export default Screen1;
