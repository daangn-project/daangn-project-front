import CommunityCard from "./CommunityCard";
const CommunityList = ({ currentCategory, communities }) => {
  console.log(currentCategory);
  return (
    <>
      <ul>
        {communities.map(
          (community) =>
            (currentCategory === 0 ||
              currentCategory === community.communityCategory) && (
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
                likeCount={community.likeCount}
                commentCount={community.commentResponseDtoList.length}
              />
            )
        )}
      </ul>
    </>
  );
};

export default CommunityList;
