import CommunityCard from "./CommunityCard";
const CommunityList = ({ communities }) => {
  return (
    <>
      <ul>
        {communities.map((community) => (
          <CommunityCard
            key={community.id}
            id={community.id}
            writer={community.writer}
            title={community.title}
            price={community.price}
            time={community.adjustedCreatedDate}
            communityCategory={community.communityCategory}
            description={community.description}
            thumbnailImg={community.thumbnailImg}
          />
        ))}
      </ul>
    </>
  );
};

export default CommunityList;
