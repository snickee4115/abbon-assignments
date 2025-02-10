import ProfileImage from "@/components/ProfileImage";
import useProfileStore from "@/store/profileStore";

const Home = () => {
  const fullName = useProfileStore((state) => state.fullName);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center">
        <ProfileImage size="lg" editable={true} />
        <h1 className="mt-4 text-3xl font-semibold">{fullName}</h1>
      </div>
    </div>
  );
};

export default Home;
