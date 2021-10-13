

import React from "react";
import {SafeAreaView, View} from "react-native";
import HeaderTabs from "../components/HeaderTabs";
import Categories from "../components/Categories";
import Thumbnail from "../components/Thumbnail";
import Footer from "../components/Footer";

export default function Home({navigation}){
    return(
        <View style={{height:"100%"}}>
        <View style={{height:"100%",display:"flex"}}>
            <HeaderTabs name={navigation} />
            <Categories />
            <Thumbnail />
            
        </View>
        <View style={{position:"absolute",bottom:"0%",width:"100%"}}>
        
        <Footer />
        
            
        </View>
        </View>
    )
}