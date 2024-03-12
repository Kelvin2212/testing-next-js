import { useSession } from "next-auth/react";

const ProfilePage = () => {
  const { data } = useSession();
  return (
    <div>
      <h1>Profile</h1>
      {data && data.user && <h2>{data.user.name}</h2>}
    </div>
  );
};

export default ProfilePage;
