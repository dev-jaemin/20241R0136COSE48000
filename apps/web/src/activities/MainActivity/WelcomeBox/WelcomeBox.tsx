import { useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import { useGetUserInfo } from '../../../apis/auth/_hooks/me';
import {
  FEMALE_50_OVER,
  FEMALE_30_UNDER,
  FEMALE_50_UNDER,
  MALE_30_UNDER,
  MALE_50_OVER,
  MALE_50_UNDER,
} from '../../../constants/userDailyNutrient';
import { useSetUserMaxNut } from '../../../recoil/userDailyNutrient';
import { getTimeIntervalOfDay } from '../../../utils/date/timeOfDay';

const currentTime = new Date();

const WelcomeBox = () => {
  const { data } = useGetUserInfo();
  const setUserMaxNut = useSetUserMaxNut();

  const text = '좋은 ' + getTimeIntervalOfDay(currentTime);

  useEffect(() => {
    if (data) {
      if (data.gender === 'MALE') {
        if (data.age < 30) setUserMaxNut(MALE_30_UNDER);
        else if (data.age < 50) setUserMaxNut(MALE_50_UNDER);
        else setUserMaxNut(MALE_50_OVER);
        return;
      }
      if (data.age < 30) setUserMaxNut(FEMALE_30_UNDER);
      else if (data.age < 50) setUserMaxNut(FEMALE_50_UNDER);
      else setUserMaxNut(FEMALE_50_OVER);
      return;
    }
  }, [data]);

  return (
    <Box textAlign={'center'}>
      <Typography variant="h3" fontWeight={400}>{text}</Typography>
      <Typography variant="h2">{data?.username + '님!'}</Typography>
    </Box>
  );
};

export default WelcomeBox;
