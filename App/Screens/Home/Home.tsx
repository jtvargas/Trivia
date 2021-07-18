import React, { useCallback, useContext, useEffect } from 'react';
import { Snackbar } from 'react-native-paper';
import { ScaledSheet } from 'react-native-size-matters';
import { HomeScreenNavigationProp } from '../../Types';
import { Home as HomeC } from '../../Containers';
import { QuizData } from '../../Context';
import { Quiz } from '../../Models';
import { useG2iApi } from '../../Hooks';
import { i18n } from '../../Core';

type Props = {
  navigation: HomeScreenNavigationProp;
};

const Home = (props: Props) => {
  const { navigation } = props;
  const [{ data, isLoading, hasError }, refetch] = useG2iApi();
  const { setQuizData } = useContext(QuizData.Context);

  useEffect(() => {
    setQuizData(Quiz.getQuestions(data));
  }, [data]);

  const goToQuizScreen = useCallback(() => {
    return navigation.push('Quiz');
  }, []);

  const tryAgainPress = useCallback(() => {
    return refetch?.();
  }, []);

  return (
    <>
      <Snackbar
        visible={hasError}
        duration={0}
        wrapperStyle={styles.snackbar}
        onDismiss={() => null}
        action={{
          label: 'RETRY',
          onPress: tryAgainPress,
        }}
      >
        {i18n.t('Home.errorState')}
      </Snackbar>
      <HomeC
        isLoading={isLoading}
        onBeginPress={goToQuizScreen}
        isDisabledButton={isLoading || hasError}
      />
    </>
  );
};

const styles = ScaledSheet.create({
  snackbar: { top: '8%', zIndex: 1 },
});

export default Home;
