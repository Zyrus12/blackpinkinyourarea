import React from 'react';
import {View, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';


const Dots = ({selected}) => {
    let backgroundColor;
    
    backgroundColor = selected ? '#FFC0CB' : 'white' ;

    return(
        <View 
            style={{
                width: 10,
                height: 10,
                borderRadius: 5,
                marginHorizontal: 10,
                backgroundColor
            }}
        />
    );
}

const OnBoardingScreen = ({navigation}) => {
    return(
        <Onboarding
        
        onSkip={() => navigation.replace('GettingStarted')}
        onDone={() => navigation.replace('GettingStarted')}
        DotComponent={Dots}
            pages={[
                {
                backgroundColor: '#000000',
                image: <Image source={require('../assets/logo3.png')} />,
                title: 'Connect to the World of Blinks',
                subtitle: 'A new way to connect and interact with your co-Blinks',
                },
                {
                    backgroundColor: '#FFC0CB',
                    image: <Image source={require('../assets/logo4.png')} />,
                    title: 'Share Your Favorites',
                    subtitle: 'Share your thoughts with your co-Blinks',
                },
                {
                    backgroundColor: '#000000',
                    image: <Image source={require('../assets/logo1.png')} />,
                    title:'Become The Star',
                    subtitle: 'Let the Spotlight shines on you',
                },
    
            ]}
        />
    );
};
// #000100 Vanta black

export default OnBoardingScreen;

