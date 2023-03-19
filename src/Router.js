import React from 'react';
import { Scene, Router, Stack, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import StudentList from './components/StudentsList';
import StudentCreate from './components/StudentCreate';
import StudentUpdate from './components/StudentUpdate';


const RouterComponent = () => {
    return (
        <Router>
            <Stack key='root'>
                <Scene key="kimlik">
                    <Scene key="loginScreen" component={LoginForm} title="GİRİŞ EKRANI" />
                </Scene>
                <Scene key="main">
                    <Scene
                        onRight={() => Actions.studentCreate()}
                        rightTitle="yeni"
                        key="studentList"
                        component={StudentList}
                        title="Öğrenci Liste"
                    />
                    <Scene
                        key="studentCreate"
                        component={StudentCreate}
                        title="Öğrenci Kaydet"
                    />
                    <Scene
                        key="studentUpdate"
                        component={StudentUpdate}
                        title="Öğrenci Güncelle"
                    />
                </Scene>

            </Stack>
        </Router>
    );
};

export default RouterComponent;