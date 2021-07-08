import React, { Component } from 'react';
import { ScrollView, Text,  } from 'react-native';
import { Card } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';


class Contact extends Component {

    static navigationOptions = {
        title: 'Contact Us'
    };

        
    render() {

        return (
            <ScrollView>
                <Animatable.View animation='fadeInUp' duration={2000} delay={1000}> 
                    <Card wrapperStyle={{margin: 20}} title="Contact Information">
                        <Text style={{margin: 20}}>
                                1 Nucamp Way{"\n"}
                                Seattle, WA 98001{"\n"} 
                                U.S.A.{"\n"}
                                {"\n"}
                                Phone: 1-206-555-1234{"\n"}
                                Email: campsites@nucamp.co{"\n"}
                        </Text>
                    </Card>
                </Animatable.View>
            </ScrollView>
        );
    }      
}

export default Contact;