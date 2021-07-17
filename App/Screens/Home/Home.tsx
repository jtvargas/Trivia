import React, { useCallback } from 'react';
import { HomeScreenNavigationProp } from '../../Types';
import { Home as HomeC } from '../../Containers';
type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = (props: Props) => {
  const { navigation } = props;
  const goToQuizScreen = useCallback(() => {
    return navigation.push('Quiz');
  }, []);

  return <HomeC onBeginPress={goToQuizScreen} />;
};

export default Home;
