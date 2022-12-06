import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const Screen2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.screen2View}>
      <View style={styles.statusBarView}>
        <Text style={styles.text}>9:30</Text>
        <View style={[styles.statusBarIconView, styles.ml132]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <Image
            style={[styles.vectorIcon1, styles.ml15]}
            resizeMode="cover"
            source={require("../assets/vector4.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.ml15]}
            resizeMode="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
      </View>
      <View style={styles.frameView1}>
        <View style={styles.frameView}>
          <Image
            style={styles.vectorIcon3}
            resizeMode="cover"
            source={require("../assets/vector6.png")}
          />
        </View>
        <Text style={[styles.searchText, styles.ml10]}>search</Text>
      </View>
      <Text style={styles.ourCoursesText}>Our Courses</Text>
      <View style={styles.frameView2}>
        <Image
          style={styles.maskGroupIcon}
          resizeMode="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={[styles.maskGroupIcon1, styles.ml28]}
          resizeMode="cover"
          source={require("../assets/mask-group.png")}
        />
        <Image
          style={[styles.maskGroupIcon2, styles.ml28]}
          resizeMode="cover"
          source={require("../assets/mask-group2.png")}
        />
      </View>
      <View style={styles.frameView3}>
        <View style={styles.rectangleView} />
      </View>
      <Text style={styles.weAreOnAMission}>
        <Text style={styles.weAreOn}>We Are On a Mission</Text>
      </Text>
      <View style={styles.rectangleView1} />
      <View style={styles.rectangleView2} />
      <Image
        style={styles.ellipseIcon}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.ellipseIcon1}
        resizeMode="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.vectorIcon4}
        resizeMode="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={styles.problemText1}>
        <Text style={styles.problemText}>Problem</Text>
      </Text>
      <Text style={styles.problemText3}>
        <Text style={styles.problemText2}>Problem</Text>
      </Text>
      <Image
        style={styles.vectorIcon5}
        resizeMode="cover"
        source={require("../assets/vector8.png")}
      />
      <Text style={styles.peopleForWholeLifeWorking}>
        <Text
          style={styles.peopleForWhole}
        >{`People for whole life Working `}</Text>
        <Text style={styles.forACompany}>for a company and struggling to</Text>
        <Text
          style={styles.generateEnoughMoney}
        >{` generate enough money to live `}</Text>
        <Text style={styles.supremeLifestyleText}>supreme lifestyle.</Text>
      </Text>
      <Text style={styles.peopleForWholeLifeWorking1}>
        <Text
          style={styles.peopleForWhole1}
        >{`People for whole life Working `}</Text>
        <Text style={styles.forACompany1}>for a company and struggling to</Text>
        <Text
          style={styles.generateEnoughMoney1}
        >{` generate enough money to live `}</Text>
        <Text style={styles.supremeLifestyleText1}>supreme lifestyle.</Text>
      </Text>
      <Image
        barStyle="default"
        resizeMode="cover"
        source={require("../assets/vector9.png")}
      />
      <Image
        barStyle="default"
        resizeMode="cover"
        source={require("../assets/bookreader.png")}
      />
      <Image
        barStyle="default"
        resizeMode="cover"
        source={require("../assets/vector10.png")}
      />
      <Text style={styles.homeText}>Home</Text>
      <Text style={styles.coursesText}>Courses</Text>
      <Text style={styles.communityText}>Community</Text>
      <Text style={styles.webinarText}>Webinar</Text>
      <Text style={styles.profileText}>Profile</Text>
      <Pressable onPress={() => navigation.navigate("Screen2")}>
        <Image
          style={styles.icon}
          barStyle="default"
          resizeMode="cover"
          source={require("../assets/vector11.png")}
        />
      </Pressable>
      <Pressable onPress={() => navigation.navigate("Screen2")}>
        <Image
          style={styles.icon1}
          barStyle="default"
          resizeMode="cover"
          source={require("../assets/vector12.png")}
        />
      </Pressable>
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
  ml10: {
    marginLeft: 10,
  },
  ml30: {
    marginLeft: 30,
  },
  ml28: {
    marginLeft: 28,
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
    left: -24,
    backgroundColor: "#fcddec",
    width: 454,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  vectorIcon3: {
    position: "relative",
    width: 18,
    height: 18,
    flexShrink: 0,
  },
  frameView: {
    flexDirection: "row",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  searchText: {
    position: "relative",
    fontSize: 20,
    fontFamily: "Inter",
    color: "#100303",
    textAlign: "center",
    width: 64,
    height: 24,
  },
  frameView1: {
    position: "absolute",
    top: 82,
    left: 21,
    borderTopLeftRadius: 2,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 10,
    backgroundColor: "#eee",
    width: 388,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  ourCoursesText: {
    position: "absolute",
    top: 236,
    left: -5,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    width: 170,
    height: 36,
  },
  maskGroupIcon: {
    position: "relative",
    width: 130,
    height: 119,
    flexShrink: 0,
  },
  maskGroupIcon1: {
    position: "relative",
    width: 130,
    height: 119,
    flexShrink: 0,
  },
  maskGroupIcon2: {
    position: "relative",
    width: 130,
    height: 119,
    flexShrink: 0,
  },
  frameView2: {
    position: "absolute",
    top: 296,
    left: 30,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  rectangleView: {
    position: "relative",
    backgroundColor: "#c60e3a",
    width: 215,
    height: 32,
    flexShrink: 0,
  },
  frameView3: {
    position: "absolute",
    top: 448,
    left: 100,
    flexDirection: "column",
    padding: 10,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  weAreOn: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  weAreOnAMission: {
    position: "absolute",
    top: 464,
    left: 117,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    width: 195,
    height: 50,
  },
  rectangleView1: {
    position: "absolute",
    top: 523,
    left: 40,
    backgroundColor: "#d9d9d9",
    width: 278,
    height: 221,
  },
  rectangleView2: {
    position: "absolute",
    top: 526,
    left: 343,
    backgroundColor: "#d9d9d9",
    width: 278,
    height: 221,
  },
  ellipseIcon: {
    position: "absolute",
    top: 538,
    left: 65,
    width: 58,
    height: 41,
  },
  ellipseIcon1: {
    position: "absolute",
    top: 541,
    left: 368,
    width: 58,
    height: 41,
  },
  vectorIcon4: {
    position: "absolute",
    height: "2.68%",
    width: "4%",
    top: "58.58%",
    right: "76.24%",
    bottom: "38.73%",
    left: "19.77%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  problemText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  problemText1: {
    position: "absolute",
    top: 605,
    left: 100,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#4b1a9c",
    textAlign: "center",
    width: 165,
    height: 29,
  },
  problemText2: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  problemText3: {
    position: "absolute",
    top: 608,
    left: 403,
    fontSize: 20,
    fontFamily: "Inter",
    color: "#4b1a9c",
    textAlign: "center",
    width: 165,
    height: 29,
  },
  vectorIcon5: {
    position: "absolute",
    height: "2.68%",
    width: "5.72%",
    top: "58.91%",
    right: "4.74%",
    bottom: "38.41%",
    left: "89.53%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  peopleForWhole: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  forACompany: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generateEnoughMoney: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  supremeLifestyleText: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  peopleForWholeLifeWorking: {
    position: "absolute",
    top: 643,
    left: 13,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    width: 333,
    height: 153,
  },
  peopleForWhole1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  forACompany1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  generateEnoughMoney1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  supremeLifestyleText1: {
    marginBlockStart: 0,
    marginBlockEnd: 0,
  },
  peopleForWholeLifeWorking1: {
    position: "absolute",
    top: 646,
    left: 316,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
    width: 333,
    height: 153,
  },
  homeText: {
    position: "absolute",
    top: 914,
    left: 10,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  coursesText: {
    position: "absolute",
    top: 914,
    left: 82,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  communityText: {
    position: "absolute",
    top: 914,
    left: 160,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  webinarText: {
    position: "absolute",
    top: 914,
    left: 271,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  profileText: {
    position: "absolute",
    top: 914,
    left: 362,
    fontSize: 15,
    fontFamily: "Inter",
    color: "#000",
    textAlign: "center",
  },
  icon: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  icon1: {
    height: "100%",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
  },
  screen2View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 932,
  },
});

export default Screen2;
