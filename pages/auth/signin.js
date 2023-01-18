import Header from "@/components/Header";
import { getProviders, signIn } from "next-auth/react";

const signin = ({ providers }) => {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <img
          className="hidden object-cover rotate-6 md:inline-flex md:w-80"
          src="https://like4like.com/img/hero-x750.png"
          alt="instagram-image"
        />
        <div className="div">
          {Object.values(providers).map((provider) => (
            <div key={provider.name} className="flex flex-col items-center">
              <img
                className="w-40 object-cover"
                src="https://roofdigital.com/wp-content/uploads/2018/07/instagram-reklam-verme.png"
                alt=""
              />
              <p className="text-sm italic my-10 text-center">
                This app is created for learning purposes
              </p>
              <button
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
              >
                Sign in with {provider.name}{" "}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
