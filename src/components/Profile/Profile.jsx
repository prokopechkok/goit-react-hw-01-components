import {
  Card,
  Description,
  Avatar,
  Name,
  Tag,
  Location,
  StatsBlock,
  StatsItem,
  Label,
  Quantity,
} from './Profile.styled';

export const Profile = ({ stats, avatar, location, tag, username }) => {
  return (
    <Card>
      <Description>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsBlock>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsBlock>
    </Card>
  );
};
