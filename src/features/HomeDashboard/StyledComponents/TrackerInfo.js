import styled from 'styled-components';
import TrackerInfo from '../Components/TrackerInfo';
import theme from '../../../theme';

export const TrackerInfoContainer = styled(TrackerInfo)`
padding:32px;
.card-height {
    height:100%;
}
.content {
    align-items: center;
    display: flex;
}

.title {
    font-weight: 700;
}
.avatar {
    background-color: ${theme.palette.warning.main};
    height: 56px;
    width: 56px;
}
.avatar-deceased {
    background-color: ${theme.palette.error.main};
    height: 56px;
    width: 56px;
}
.avatar-recovered {
    background-color: ${theme.palette.success.main};
    height: 56px;
    width: 56px;
}
.avatar-total {
    background-color: ${theme.palette.info.main};
    height: 56px;
    width: 56px;
}
.icon {
    height:32px;
    width:32px;
}

.difference {
    margin-top: ${theme.spacing(2)}px;
    display: flex;
    align-items: center;
}

.differenceIcon {
    color: ${theme.palette.error.dark};
}

.differenceValue {
    color: ${theme.palette.error.dark};
    margin-right: ${theme.spacing(1)}px;
}
`;