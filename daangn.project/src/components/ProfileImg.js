import styled from "styled-components";

export const SmallImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

export const ProfileImg = ({ name }) => {
  return (
    <div>
      <SmallImg
        src="https://d1unjqcospf8gs.cloudfront.net/assets/users/default_profile_80-7e50c459a71e0e88c474406a45bbbdce8a3bf2ed4f2efcae59a064e39ea9ff30.png"
        alt={name}
      />
    </div>
  );
};
