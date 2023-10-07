import Image from "next/image";

const ProfilePic = () => {
  return (
    <section className="w-full mx-auto">
      <Image
        className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
        src="/images/Rafet.jpg"
        width={200}
        height={200}
        alt="This is me - Rafet"
        priority={true}
      />
    </section>
  );
};
export default ProfilePic;
