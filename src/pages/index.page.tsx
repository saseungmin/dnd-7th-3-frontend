import styled from '@emotion/styled';

import Button from '@/components/common/Button';
import FoodCategories from '@/components/common/home/FoodCategories';
import MobileWebLayout from '@/components/common/MobileWebLayout';

import LocationIcon from '../assets/icons/location.svg';

function IndexPage() {
  return (
    <IndexPageLayout>
      <div>
        <LocationWrapper>
          <LocationIcon />
          <div>
            위치정보없음
          </div>
        </LocationWrapper>
        <Title>
          2차에서 먹고싶은
          <br />
          메뉴를 선택해주세요
        </Title>
        <FoodCategories />
      </div>
      <div>
        <Button>
          다음
        </Button>
      </div>
    </IndexPageLayout>
  );
}

export default IndexPage;

const IndexPageLayout = styled(MobileWebLayout)`
  & > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div:last-of-type {
      display: flex;
      justify-content: center;
      margin-bottom: 12px;
    }
  }
`;

const LocationWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-top: 38px;
  margin-bottom: 50px;
  
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: -0.05em;
  color: #FFFFFF;

  & > svg {
    margin-right: 4px;
  }
`;

const Title = styled.h1`
  margin: 0px;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  letter-spacing: -0.05em;
  color: #FFFFFF;
`;
